# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email: 'admin@lel.lan', password: '123')

Page.create(title: 'Наведения', slug: 'hovers')
	.videos.create([                    
		{url: "http://tympanus.net/Tutorials/CircleHoverEffects/index.html", title: "Circle Hover Effects", filename: "circle.webm"},
	  {url: "http://tympanus.net/Development/HoverEffectIdeas/index2.html", title: "Hover Effect Ideas. По ссылке больше примеров", filename: "hover2.webm"},
	  {url: "http://tympanus.net/Tutorials/ShapeHoverEffectSVG/index.html", title: "Shape Hover Effect with SVG", filename: "hover3.webm"}
])

Page.create(title: 'Кнопки', slug: 'buttons')
	.videos.create([   
		{url: "http://codepen.io/itsnoureddine/pen/QwEjpK", title: "Buttons menu", filename: "button.webm"}
])

Page.create(title: 'Попапы', slug: 'popups')
	.videos.create([   
		{url: "http://tristanedwards.me/sweetalert", title: "Sweet Alert", filename: "alert.webm"},
		{url: "http://tympanus.net/Development/DialogEffects/index.html", title: "Dialog Effects. По ссылке больше примеров", filename: "popups.webm"},
])

Page.create(title: 'Переходы', slug: 'transitions')
	.videos.create([   
		{url: "http://tympanus.net/Development/ArticleIntroEffects/", title: "Переход из картинки в контент", filename: "perehod.webm"},
		{url: "http://tympanus.net/Development/PageLoadingEffects/index3.html", title: "Красивая смена страницы. По ссылке больше примеров", filename: "perehod2.webm"},
		{url: "http://codepen.io/pixelass/pen/gixzc", title: "Apple Mac", filename: "mac.webm"}
])

Page.create(title: 'Лоадеры', slug: 'loaders')
	.videos.create([   
		{url: "http://pasqualevitiello.github.io/Tumblr-Style-Cog-Spinners/", title: "Tumblr-Style Cog Loader", filename: "loaders.webm"}
])

Page.create(title: 'Иконки', slug: 'icons')
	.videos.create([   
		{url: "http://fian.my.id/marka/", title: "Marka", filename: "icons.webm"}
])

Page.create(title: 'Прогресс бары', slug: 'progress-bars')
Page.create(title: 'Табы', slug: 'tabs')