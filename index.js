Index = {
	phantom : require('phantom'),
	takeScreenshot : async(url, file) => {
		const instance = await Index.phantom.create();
		const page     = await instance.createPage();
		page.property('viewportSize', {
			width : 1920,
			height : 1080
		});
		const status = await page.open(url);
		const createImage = async (page, instance) => {
			await page.render(file + ".png");
			await instance.exit();
		};
		setTimeout(createImage, 1000, page, instance, url);
	}
};

Index.takeScreenshot('https://www.rebecag.com', 'rebecagrn');