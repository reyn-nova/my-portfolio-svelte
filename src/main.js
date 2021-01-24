import Index from './routes/index/source.svelte';

const app = new Index({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;