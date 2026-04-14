import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#050816",
            color: "#ffffff",
            fontFamily: "Arial, sans-serif",
            padding: "20px",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#ff6b6b" }}>
            ❌ Runtime Error
          </h1>
          <p style={{ fontSize: "1rem", maxWidth: "650px", textAlign: "center", marginBottom: "1rem" }}>
            An error occurred while rendering the application.
          </p>
          <pre
            style={{
              backgroundColor: "#1a1a2e",
              color: "#00ff00",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "800px",
              overflow: "auto",
              fontSize: "0.9rem",
              textAlign: "left",
            }}
          >
            {this.state.error?.message || "Unknown error"}
            {"\n\n"}
            {this.state.error?.stack || ""}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#915EFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
