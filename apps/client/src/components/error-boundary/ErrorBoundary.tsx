import React from 'react';
import { Component, ErrorInfo, ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  page: ReactElement;
}

interface State {
  hasError: boolean;
  error: Error | null;
}
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.state.hasError && prevProps.page !== this.props.page) {
      this.setState({ hasError: false, error: null });
    }
  }

  public render() {
    if (this.state.hasError) {
      return React.cloneElement(this.props.page, { error: this.state.error });
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
