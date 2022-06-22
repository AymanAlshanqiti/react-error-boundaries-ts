import Card from './components/Card';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
	return (
		<div className="h-auto flex flex-wrap justify-center gap-5 m-5">
			<h1 className="w-full text-center font-black text-3xl text-indigo-600 ">
				مبادرات إدارة البرمجيات
			</h1>
			<ErrorBoundary>
				<Card
					title="تحدي الوصول مبكرا"
					description="في هذا التحدي الفائز هو الذي يصل مبكرا ابتداء من الساعة 9 صباحا"
					maxCount={3}
				/>
			</ErrorBoundary>

			<ErrorBoundary>
				<Card
					title="تحدي المشي 5 كيلو"
					description="في هذا التحدي الفائز هو الذي يمشي أكثر عدد كيلوات يوميا"
					maxCount={5}
				/>
			</ErrorBoundary>

			<ErrorBoundary>
				<Card
					title="تحدي أسرع شخص يكتب بالكيبورد"
					description="في هذا التحدي الفائز هو الأسرع في الكتابة في الكيبورد خلال اختبار 5 دقائق"
					maxCount={7}
				/>
			</ErrorBoundary>
		</div>
	);
}

export default App;
