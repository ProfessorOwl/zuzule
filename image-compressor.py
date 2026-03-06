from PIL import Image
import os
import shutil


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
    target: str,
    quality: int = 90,
    width: int | None = None,
    height: int | None = None,
    to_webp: bool = True,
):
    img = Image.open(image_name)
    print("[*] Image shape:", img.size)

    image_size = os.path.getsize(image_name)
    print("[*] Size before compression:", get_size_format(image_size))

    if width and height and width < img.size[0]:
        # if width and height are set, resize with them
        img = img.resize((width, height), Image.Resampling.LANCZOS)
        print("[+] New Image shape:", img.size)

    # split the filename and extension
    filename, ext = os.path.splitext(image_name)

    if to_webp:
        new_filename = f"{filename}_compressed.webp"
    else:
        new_filename = f"{filename}_compressed{ext}"
    try:
        img.save(os.path.join(target, new_filename), quality=quality, optimize=True)
    except OSError:
        # convert the image to RGB mode first
        img = img.convert("RGB")
        img.save(os.path.join(target, new_filename), quality=quality, optimize=True)
    print("[+] New file saved:", new_filename)

    new_image_size = os.path.getsize(new_filename)
    print("[+] Size after compression:", get_size_format(new_image_size))

    # calculate the saving bytes
    saving_diff = new_image_size - image_size
    print(
        f"[+] Image size change: {saving_diff/image_size*100:.2f}% of the original image size."
    )


# compress_img("public/Zylinder/doseKokosDurchmesser.jpg", quality=65, to_webp=True)


def get_photos(
    path: str, include: tuple[str, ...] = (".png", ".png", ".jpeg", ".webp")
):
    """
    Gibt den relativen Pfad aller Fotos zurück, die im Ordner und allen Subordnern unter path enthalten sind und der Dateityp in include vorgegeben ist.
    """
    photos = [
        os.path.join(path, f)
        for f in os.listdir(path)
        if os.path.isfile(os.path.join(path, f)) and f.endswith(include)
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
                if os.path.isfile(os.path.join(dir, f)) and f.endswith(include)
            ]
            subdirs += [
                os.path.join(dir, f)
                for f in os.listdir(dir)
                if os.path.isdir(os.path.join(dir, f))
            ]
            subdirs.remove(dir)
    return photos


for f in get_photos("public/Original"):
    compress_img(f, "public/Komprimiert", quality=65, to_webp=True)
