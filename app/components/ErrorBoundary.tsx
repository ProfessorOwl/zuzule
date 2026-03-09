import { Component } from "react";
import { Alert, Center, Text } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

type Props = {
    errorMessage?: string;
    children: React.ReactNode;
};
type State = { hasError: boolean; error?: Error };

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError = (error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    };

    componentDidCatch(error: Error, info: any) {
        // eslint-disable-next-line no-console
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Center my="md">
                    <Alert variant="light" color="red" icon={<IconAlertCircle />} title="Fehler beim Laden der Komponente" w="100%" my="md">
                        <Text size="sm">{this.props.errorMessage || "Beim Laden dieser Komponente ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."}</Text>
                    </Alert>
                </Center>
            );
        }

        return this.props.children;
    }
}
