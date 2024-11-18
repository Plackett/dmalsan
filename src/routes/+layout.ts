export const load = async ({ url }) => {
	return { path: url.pathname };
};

export const prerender = true;
