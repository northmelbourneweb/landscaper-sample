const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));

for (const item of faqItems) {
	const onClick = () => {
		// Close all other items
		for (const otherItem of faqItems) {
			if (otherItem !== item) {
				otherItem.classList.remove('active');
			}
		}
		// Toggle the clicked item
		item.classList.toggle('active');
	};

	item.addEventListener('click', onClick);
}
