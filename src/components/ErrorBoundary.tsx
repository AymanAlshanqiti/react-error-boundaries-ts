import { Component } from 'react';

interface ErrorBoundaryProps {
	children: JSX.Element;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	// this lifecycle is invoked after an error has been thrown by any of its children components
	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="p-4 basis-full md:basis-1/4 border border-red-400 flex flex-col justify-center rounded-lg items-center gap-2">
					<h1 className="font-bold text-xl text-red-500">
						حدث خطا أثناء معالجة البيانات
					</h1>
					<h3 className="text-red-400">تفاصيل الخطأ</h3>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
