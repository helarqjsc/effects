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
	  {url: "http://tympanus.net/Tutorials/ShapeHoverEffectSVG/index.html", title: "Shape Hover Effect with SVG", filename: "hover3.webm"},
	  {url: "http://tympanus.net/Tutorials/BorderAnimationSVG/", title: "Border Animation SVG", filename: "hoverborder.webm"}   
])

Page.create(title: 'UI', slug: 'ui')
	.videos.create([   
		{url: "http://codepen.io/itsnoureddine/pen/QwEjpK", title: "Buttons menu", filename: "button.webm"},
		{url: "http://tympanus.net/Development/DotNavigationStyles/", title: "Dot Navigation. По ссылке больше примеров", filename: "dot.webm"},
		{url: "http://pasqualevitiello.github.io/Tumblr-Style-Cog-Spinners/", title: "Tumblr-Style Cog Loader", filename: "loaders.webm"},
		{url: "http://tympanus.net/Development/SelectInspiration/index.html", title: "Select Box", filename: "select.webm"}
])

Page.create(title: 'List', slug: 'list')
	.videos.create([   
		{url: "http://thecodeplayer.com/walkthrough/grid-animation-effects", title: "Grid animation effects", filename: "3dgrid.webm"}
])

Page.create(title: 'Попапы', slug: 'popups')
	.videos.create([   
		{url: "http://tristanedwards.me/sweetalert", title: "Sweet Alert", filename: "alert.webm"},
		{url: "http://tympanus.net/Development/DialogEffects/index.html", title: "Dialog Effects. По ссылке больше примеров", filename: "popups.webm"},
		{url: "http://tympanus.net/Development/ButtonComponentMorph/index.html", title: "Morphing Buttons. По ссылке больше примеров", filename: "morph.webm"}
])

Page.create(title: 'Переходы', slug: 'transitions')
	.videos.create([   
		{url: "http://tympanus.net/Development/ArticleIntroEffects/", title: "Переход из картинки в контент", filename: "perehod.webm"},
		{url: "http://tympanus.net/Development/PageLoadingEffects/index3.html", title: "Красивая смена страницы. По ссылке больше примеров", filename: "perehod2.webm"},
		{url: "http://codepen.io/pixelass/pen/gixzc", title: "Apple Mac", filename: "mac.webm"}
])

Page.create(title: 'Иконки', slug: 'icons')
	.videos.create([   
		{url: "http://fian.my.id/marka/", title: "Marka", filename: "icons.webm"}
])

Page.create(title: 'Галереи', slug: 'galleries')
	.videos.create([   
		{url: "http://photoswipe.com/", title: "Photo Swipe", filename: "photoswipe.webm"}
])

Page.create(title: 'Параллакс', slug: 'Parallax')
	.videos.create([   
		{url: "http://janpaepke.github.io/ScrollMagic/", title: "Scroll Magic", filename: "parallax.webm"}
])

Page.create(title: 'Табы', slug: 'tabs')