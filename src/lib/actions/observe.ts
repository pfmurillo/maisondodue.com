type ObserveParams = {
	threshold?: number;
};

let observer: IntersectionObserver;

const initObserver = (params: ObserveParams) => {
	if (observer) return;
	const { threshold } = params;
	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.dispatchEvent(new CustomEvent('enterviewport'));
				} else {
					entry.target.dispatchEvent(new CustomEvent('leaveviewport'));
				}
			});
		},
		{
			threshold: threshold
		}
	);
};

export const observe = (node: HTMLElement, params: ObserveParams = { threshold: 0 }) => {
	initObserver(params);
	observer.observe(node);
};
