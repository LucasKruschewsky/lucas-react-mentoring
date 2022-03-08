export interface IErrorBoundaryState {
  hasError: boolean;
  error: Error;
  errorInfo: React.ErrorInfo;
}

export interface IErrorBoundaryProps {}
