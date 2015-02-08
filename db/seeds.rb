# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'admin', password: '123', provider: '')
ContributedUrl.create(url: 'http://google.com', ip_addr: '8.8.8.8')

#categories
hovers = Taxonomy.create(name: 'Hovers', taxonomy_type: 'category')
ui = Taxonomy.create(name: 'UI', taxonomy_type: 'category')
list = Taxonomy.create(name: 'List', taxonomy_type: 'category')
popups = Taxonomy.create(name: 'Popups', taxonomy_type: 'category')
transitions = Taxonomy.create(name: 'Transitions', taxonomy_type: 'category')
icons = Taxonomy.create(name: 'Icons', taxonomy_type: 'category')
galleries = Taxonomy.create(name: 'Galleries', taxonomy_type: 'category')
parallax = Taxonomy.create(name: 'Parallax', taxonomy_type: 'category')
tabs = Taxonomy.create(name: 'Tabs', taxonomy_type: 'category')

#tags
css = Taxonomy.create(name: 'CSS', taxonomy_type: 'tag')
angular = Taxonomy.create(name: 'Angular', taxonomy_type: 'tag')


base_path = "#{Rails.root}/db/seeds/video/"
Video.create(                   
			url: "http://tympanus.net/Tutorials/CircleHoverEffects/index.html", 
			title: "Circle Hover Effects", 
			file: File.new("#{base_path}circle.webm")
		).taxonomies = [hovers, angular, css]

Video.create(                   
			url: "http://tympanus.net/Development/HoverEffectIdeas/index2.html", 
			title: "Hover Effect Ideas. По ссылке больше примеров", 
			file: File.new("#{base_path}hover2.webm")
		).taxonomies = [hovers, css]

Video.create(                   
			url: "http://tympanus.net/Tutorials/ShapeHoverEffectSVG/index.html", 
			title: "Shape Hover Effect with SVG", 
			file: File.new("#{base_path}hover3.webm")
		).taxonomies = [hovers, css]

Video.create(                   
			url: "http://tympanus.net/Tutorials/BorderAnimationSVG/", 
			title: "Border Animation SVG", 
			file: File.new("#{base_path}hoverborder.webm")
		).taxonomies = [hovers, angular]

Video.create(                   
			url: "http://codepen.io/itsnoureddine/pen/QwEjpK", 
			title: "Buttons menu", 
			file: File.new("#{base_path}button.webm")
		).taxonomies = [ui, css]

Video.create(                   
			url: "http://tympanus.net/Development/DotNavigationStyles/", 
			title: "Dot Navigation. По ссылке больше примеров", 
			file: File.new("#{base_path}dot.webm")
		).taxonomies = [ui, angular, css]

Video.create(                   
			url: "http://pasqualevitiello.github.io/Tumblr-Style-Cog-Spinners/", 
			title: "Tumblr-Style Cog Loader", 
			file: File.new("#{base_path}loaders.webm")
		).taxonomies = [ui, angular, css]

Video.create(                   
			url: "http://tympanus.net/Development/SelectInspiration/index.html", 
			title: "Select Box", 
			file: File.new("#{base_path}select.webm")
		).taxonomies = [ui, css]

Video.create(                   
			url: "http://thecodeplayer.com/walkthrough/grid-animation-effects", 
			title: "Grid animation effects", 
			file: File.new("#{base_path}3dgrid.webm")
		).taxonomies = [list, css]

Video.create(                   
			url: "http://tristanedwards.me/sweetalert", 
			title: "Sweet Alert", 
			file: File.new("#{base_path}alert.webm")
		).taxonomies = [popups, css]

Video.create(                   
			url: "http://tympanus.net/Development/DialogEffects/index.html", 
			title: "Dialog Effects. По ссылке больше примеров", 
			file: File.new("#{base_path}popups.webm")
		).taxonomies = [popups, css]

Video.create(                   
			url: "http://tympanus.net/Development/ButtonComponentMorph/index.html", 
			title: "Morphing Buttons. По ссылке больше примеров", 
			file: File.new("#{base_path}morph.webm")
		).taxonomies = [popups, css]

Video.create(                   
			url: "http://tympanus.net/Development/ArticleIntroEffects/", 
			title: "Переход из картинки в контент", 
			file: File.new("#{base_path}perehod.webm")
		).taxonomies = [transitions, angular, css]

Video.create(                   
			url: "http://tympanus.net/Development/PageLoadingEffects/index3.html", 
			title: "Красивая смена страницы. По ссылке больше примеров", 
			file: File.new("#{base_path}perehod2.webm")
		).taxonomies = [transitions, angular, css]

Video.create(                   
			url: "http://codepen.io/pixelass/pen/gixzc", 
			title: "Apple Mac", 
			file: File.new("#{base_path}mac.webm")
		).taxonomies = [transitions, css]

Video.create(                   
			url: "http://fian.my.id/marka/", 
			title: "Marka", 
			file: File.new("#{base_path}icons.webm")
		).taxonomies = [icons, css]

Video.create(                   
			url: "http://photoswipe.com/", 
			title: "Photo Swipe", 
			file: File.new("#{base_path}photoswipe.webm")
		).taxonomies = [galleries, angular]

Video.create(                   
			url: "http://janpaepke.github.io/ScrollMagic/", 
			title: "Scroll Magic", 
			file: File.new("#{base_path}parallax.webm")
		).taxonomies = [parallax, angular, css]

