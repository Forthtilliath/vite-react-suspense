import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";

type Props = {
  fallback?: ReactNode;
};

type AllGood = {
  error: null;
  errorInfo: null;
};
type HasError = {
  error: Error;
  errorInfo: ErrorInfo;
};
type State = AllGood | HasError;

class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // public static getDerivedStateFromError(error: Error) {
  //   return { hasError: true, error };
  // }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.errorInfo) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && <summary>{this.state.error.toString()}</summary>}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
