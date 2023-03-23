import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["332.png","analytics.png","analytics2.png","anim.png","color-balance.png","data-analysis.png","data-analytics.png","favicon.png","growth-chart.png","icon1.png","line-chart.png","news.png","piechart.png","piechart2.png","report.png","s1.png","s2.png","structure.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cf86919c.js","imports":["_app/immutable/entry/start.cf86919c.js","_app/immutable/chunks/index.46a4698c.js","_app/immutable/chunks/singletons.3f5bbdf7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6e44db46.js","imports":["_app/immutable/entry/app.6e44db46.js","_app/immutable/chunks/index.46a4698c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
