# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'admin', password: '123')

ContributedUrl.create(url: 'http://google.com', ip_addr: '8.8.8.8')

base_path = "#{Rails.root}/db/seeds/video/"
Page.create(title: 'Наведения', slug: 'hovers')
	.videos.create([                    
		{
			url: "http://tympanus.net/Tutorials/CircleHoverEffects/index.html", 
			title: "Circle Hover Effects", 
			file: File.new("#{base_path}circle.webm")
		},
	  {
	  	url: "http://tympanus.net/Development/HoverEffectIdeas/index2.html", 
	  	title: "Hover Effect Ideas. По ссылке больше примеров", 
	  	file: File.new("#{base_path}hover2.webm")
	  },
	  {
	  	url: "http://tympanus.net/Tutorials/ShapeHoverEffectSVG/index.html", 
	  	title: "Shape Hover Effect with SVG", 
	  	file: File.new("#{base_path}hover3.webm")
	  },
	  {
	  	url: "http://tympanus.net/Tutorials/BorderAnimationSVG/", 
	  	title: "Border Animation SVG", 
	  	file: File.new("#{base_path}hoverborder.webm")
	  }   
])

Page.create(title: 'UI', slug: 'ui')
	.videos.create([   
		{
			url: "http://codepen.io/itsnoureddine/pen/QwEjpK", 
			title: "Buttons menu", 
	  	file: File.new("#{base_path}button.webm")
		},
		{
			url: "http://tympanus.net/Development/DotNavigationStyles/", 
			title: "Dot Navigation. По ссылке больше примеров", 
	  	file: File.new("#{base_path}dot.webm")
		},
		{
			url: "http://pasqualevitiello.github.io/Tumblr-Style-Cog-Spinners/", 
			title: "Tumblr-Style Cog Loader", 
	  	file: File.new("#{base_path}loaders.webm")
		},
		{
			url: "http://tympanus.net/Development/SelectInspiration/index.html", 
			title: "Select Box", 
	  	file: File.new("#{base_path}select.webm")
		}
])

Page.create(title: 'List', slug: 'list')
	.videos.create([   
		{
			url: "http://thecodeplayer.com/walkthrough/grid-animation-effects", 
			title: "Grid animation effects", 
	  	file: File.new("#{base_path}3dgrid.webm")
		}
])

Page.create(title: 'Попапы', slug: 'popups')
	.videos.create([   
		{
			url: "http://tristanedwards.me/sweetalert", 
			title: "Sweet Alert", 
	  	file: File.new("#{base_path}alert.webm")
		},
		{
			url: "http://tympanus.net/Development/DialogEffects/index.html", 
			title: "Dialog Effects. По ссылке больше примеров", 
	  	file: File.new("#{base_path}popups.webm")
		},
		{
			url: "http://tympanus.net/Development/ButtonComponentMorph/index.html", 
			title: "Morphing Buttons. По ссылке больше примеров", 
	  	file: File.new("#{base_path}morph.webm")
		}
])

Page.create(title: 'Переходы', slug: 'transitions')
	.videos.create([   
		{
			url: "http://tympanus.net/Development/ArticleIntroEffects/", 
			title: "Переход из картинки в контент", 
	  	file: File.new("#{base_path}perehod.webm")
		},
		{
			url: "http://tympanus.net/Development/PageLoadingEffects/index3.html", 
			title: "Красивая смена страницы. По ссылке больше примеров", 
	  	file: File.new("#{base_path}perehod2.webm")
		},
		{
			url: "http://codepen.io/pixelass/pen/gixzc", 
			title: "Apple Mac", 
	  	file: File.new("#{base_path}mac.webm")
		}
])

Page.create(title: 'Иконки', slug: 'icons')
	.videos.create([   
		{
			url: "http://fian.my.id/marka/", 
			title: "Marka", 
	  	file: File.new("#{base_path}icons.webm")
		}
])

Page.create(title: 'Галереи', slug: 'galleries')
	.videos.create([   
		{
			url: "http://photoswipe.com/", 
			title: "Photo Swipe", 
	  	file: File.new("#{base_path}photoswipe.webm")
		}
])

Page.create(title: 'Параллакс', slug: 'Parallax')
	.videos.create([   
		{
			url: "http://janpaepke.github.io/ScrollMagic/", 
			title: "Scroll Magic", 
	  	file: File.new("#{base_path}parallax.webm")
		}
])

Page.create(title: 'Табы', slug: 'tabs')