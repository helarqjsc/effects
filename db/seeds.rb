# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'admin', password: '123')

tags = {
	angular: Tag.create(name: 'angular', slug: 'angular', default_check: true),
	css: Tag.create(name: 'css', slug: 'css', default_check: true)
}

base_path = "#{Rails.root}/db/seeds/video/"
Category.create(name: 'Наведения', slug: 'hovers')
	.videos.create([                    
		{
			url: "http://tympanus.net/Tutorials/CircleHoverEffects/index.html", 
			name: "Circle Hover Effects", 
			file: File.new("#{base_path}circle.webm")
		},
	  {
	  	url: "http://tympanus.net/Development/HoverEffectIdeas/index2.html", 
	  	name: "Hover Effect Ideas. По ссылке больше примеров", 
	  	file: File.new("#{base_path}hover2.webm")
	  },
	  {
	  	url: "http://tympanus.net/Tutorials/ShapeHoverEffectSVG/index.html", 
	  	name: "Shape Hover Effect with SVG", 
	  	file: File.new("#{base_path}hover3.webm")
	  },
	  {
	  	url: "http://tympanus.net/Tutorials/BorderAnimationSVG/", 
	  	name: "Border Animation SVG", 
	  	file: File.new("#{base_path}hoverborder.webm")
	  }   
])

Category.create(name: 'UI', slug: 'ui')
	.videos.create([   
		{
			url: "http://codepen.io/itsnoureddine/pen/QwEjpK", 
			name: "Buttons menu", 
	  	file: File.new("#{base_path}button.webm")
		},
		{
			url: "http://tympanus.net/Development/DotNavigationStyles/", 
			name: "Dot Navigation. По ссылке больше примеров", 
	  	file: File.new("#{base_path}dot.webm")
		},
		{
			url: "http://pasqualevitiello.github.io/Tumblr-Style-Cog-Spinners/", 
			name: "Tumblr-Style Cog Loader", 
	  	file: File.new("#{base_path}loaders.webm")
		},
		{
			url: "http://tympanus.net/Development/SelectInspiration/index.html", 
			name: "Select Box", 
	  	file: File.new("#{base_path}select.webm")
		}
])

Category.create(name: 'List', slug: 'list')
	.videos.create([   
		{
			url: "http://thecodeplayer.com/walkthrough/grid-animation-effects", 
			name: "Grid animation effects", 
	  	file: File.new("#{base_path}3dgrid.webm")
		}
])

Category.create(name: 'Попапы', slug: 'popups')
	.videos.create([   
		{
			url: "http://tristanedwards.me/sweetalert", 
			name: "Sweet Alert", 
	  	file: File.new("#{base_path}alert.webm")
		},
		{
			url: "http://tympanus.net/Development/DialogEffects/index.html", 
			name: "Dialog Effects. По ссылке больше примеров", 
	  	file: File.new("#{base_path}popups.webm")
		},
		{
			url: "http://tympanus.net/Development/ButtonComponentMorph/index.html", 
			name: "Morphing Buttons. По ссылке больше примеров", 
	  	file: File.new("#{base_path}morph.webm")
		}
])

Category.create(name: 'Переходы', slug: 'transitions')
	.videos.create([   
		{
			url: "http://tympanus.net/Development/ArticleIntroEffects/", 
			name: "Переход из картинки в контент", 
	  	file: File.new("#{base_path}perehod.webm")
		},
		{
			url: "http://tympanus.net/Development/CategoryLoadingEffects/index3.html", 
			name: "Красивая смена страницы. По ссылке больше примеров", 
	  	file: File.new("#{base_path}perehod2.webm")
		},
		{
			url: "http://codepen.io/pixelass/pen/gixzc", 
			name: "Apple Mac", 
	  	file: File.new("#{base_path}mac.webm")
		}
])

Category.create(name: 'Иконки', slug: 'icons')
	.videos.create([   
		{
			url: "http://fian.my.id/marka/", 
			name: "Marka", 
	  	file: File.new("#{base_path}icons.webm")
		}
])

Category.create(name: 'Галереи', slug: 'galleries')
	.videos.create([   
		{
			url: "http://photoswipe.com/", 
			name: "Photo Swipe", 
	  	file: File.new("#{base_path}photoswipe.webm")
		}
])

Category.create(name: 'Параллакс', slug: 'P arallax')
	.videos.create([   
		{
			url: "http://janpaepke.github.io/ScrollMagic/", 
			name: "Scroll Magic", 
	  	file: File.new("#{base_path}parallax.webm")
		}
])

Category.create(name: 'Табы', slug: 'tabs')

ContributedUrl.create(url: 'http://google.com', ip_addr: '8.8.8.8')
