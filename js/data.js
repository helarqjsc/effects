angular
    .module('effects.data', [])
    .factory('data', function() {
            return [
                {name: "Наведение", items: [
                    {link: "http://tympanus.net/Tutorials/CircleHoverEffects/index.html", title: "Circle Hover Effects", video: "circle.webm"},
                    {link: "http://tympanus.net/Development/HoverEffectIdeas/index2.html", title: "Hover Effect Ideas. По ссылке больше примеров", video: "hover2.webm"},
                    {link: "http://tympanus.net/Tutorials/ShapeHoverEffectSVG/index.html", title: "Shape Hover Effect with SVG", video: "hover3.webm"}
                ]},
                {name: "Кнопки", items: [
                    {link: "http://codepen.io/itsnoureddine/pen/QwEjpK", title: "Buttons menu", video: "button.webm"}
                ]},
                {name: "Попапы", items: [
                    {link: "http://tristanedwards.me/sweetalert", title: "Sweet Alert", video: "alert.webm"},
                    {link: "http://tympanus.net/Development/DialogEffects/index.html", title: "Dialog Effects. По ссылке больше примеров", video: "popups.webm"},
                ]},
                {name: "Переходы", items: [
                    {link: "http://tympanus.net/Development/ArticleIntroEffects/", title: "Переход из картинки в контент", video: "perehod.webm"},
                    {link: "http://tympanus.net/Development/PageLoadingEffects/index3.html", title: "Красивая смена страницы. По ссылке больше примеров", video: "perehod2.webm"},
                    {link: "http://codepen.io/pixelass/pen/gixzc", title: "Apple Mac", video: "mac.webm"}
                ]},
                {name: "Лоадеры", items: [
                    {link: "http://pasqualevitiello.github.io/Tumblr-Style-Cog-Spinners/", title: "Tumblr-Style Cog Loader", video: "loaders.webm"}
                ]},
                {name: "Иконки", items: [
                    {link: "http://fian.my.id/marka/", title: "Marka", video: "icons.webm"}
                ]},
                {name: "Прогресс бары", items: [
                ]},

                {name: "Табы", items: [
                ]}
            ]
        });
