import { Component, type ReactNode } from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

type Props = { children: ReactNode };
type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  handleReturn = () => {
    this.setState({ hasError: false, error: null });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-ink-950 text-bone-50 flex items-center justify-center px-5">
          <Container>
            <div className="max-w-lg text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">
                Error
              </p>
              <h1 className="mt-6 text-balance text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl">
                Something went wrong
              </h1>
              <p className="mt-4 text-base leading-7 text-bone-200/70">
                An unexpected error occurred. Please try again or return to the home page.
              </p>
              {this.state.error && (
                <p className="mt-4 text-xs text-steel-500">
                  {this.state.error.message}
                </p>
              )}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button onClick={this.handleReturn} variant="secondary" size="md">
                  Try again
                </Button>
                <Button onClick={this.handleReload} size="md">
                  Reload page
                </Button>
              </div>
            </div>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}
