from PIL import Image
import os
import json


def get_size_format(b, factor=1024, suffix="B"):
    """
    Scale bytes to its proper byte format
    e.g:
        1253656 => '1.20MB'
        1253656678 => '1.17GB'
    """
    for unit in ["", "K", "M", "G", "T", "P", "E", "Z"]:
        if b < factor:
            return f"{b:.2f}{unit}{suffix}"
        b /= factor
    return f"{b:.2f}Y{suffix}"


def compress_img(
    image_name: str,
    quality: int = 90,
    width: int | None = None,
    to_webp: bool = True,
):
    img = Image.open(image_name)

    aspect_ratio = img.size[1] / img.size[0]

    if width and width < img.size[0]:
        # if width and height are set, resize with them
        img = img.resize((width, int(width * aspect_ratio)), Image.Resampling.LANCZOS)

    # split the filename and extension
    filename, ext = os.path.splitext(image_name)
    filename = filename.replace("orig_", "")
    if to_webp:
        new_filename = f"{filename}.webp"
    else:
        new_filename = f"{filename}{ext}"

    try:
        img.save(new_filename, format="webp", quality=quality, optimize=True)
    except OSError:
        # convert the image to RGB mode first
        img = img.convert("RGB")
        img.save(new_filename, quality=quality, optimize=True)
    print("Converted to:", new_filename)

    # calculate the saving bytes


def get_uncompressed_photos(
    path: str, include: tuple[str, ...] = (".png", ".jpg", ".JPG", ".jpeg", ".webp")
):
    """
    Gibt den relativen Pfad aller Fotos zurück, die im Ordner und allen Subordnern unter path enthalten sind und der Dateityp in include vorgegeben ist.
    """
    photos = [
        os.path.join(path, f)
        for f in os.listdir(path)
        if os.path.isfile(os.path.join(path, f))
        and f.endswith(include)
        and f.startswith("orig_")
    ]
    subdirs = [
        os.path.join(path, f)
        for f in os.listdir(path)
        if os.path.isdir(os.path.join(path, f))
    ]
    while subdirs != []:
        for dir in subdirs:
            photos += [
                os.path.join(dir, f)
                for f in os.listdir(dir)
                if os.path.isfile(os.path.join(dir, f))
                and f.endswith(include)
                and f.startswith("orig_")
            ]
            subdirs += [
                os.path.join(dir, f)
                for f in os.listdir(dir)
                if os.path.isdir(os.path.join(dir, f))
            ]
            subdirs.remove(dir)
    return photos


MTIME_CACHE = ".image-compressor-mtimes.json"


def load_mtime_cache() -> dict[str, float]:
    if os.path.isfile(MTIME_CACHE):
        with open(MTIME_CACHE, "r") as fh:
            return json.load(fh)
    return {}


def save_mtime_cache(cache: dict[str, float]) -> None:
    with open(MTIME_CACHE, "w") as fh:
        json.dump(cache, fh, indent=2)


cache = load_mtime_cache()
for f in get_uncompressed_photos("public"):
    key = f.replace(os.sep, "/")
    mtime = os.path.getmtime(f)
    if key not in cache or mtime > cache[key]:
        compress_img(f, width=1400)
        cache[key] = mtime
save_mtime_cache(cache)
