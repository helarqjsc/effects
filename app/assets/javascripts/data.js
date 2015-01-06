angular
    .module('effects.data', [])
    .factory('data', function() {
            return [
                {name: "Наведение", page: "hovers", items: [
                    {link: "http://tympanus.net/Tutorials/CircleHoverEffects/index.html", title: "Circle Hover Effects", video: "circle.webm"},
                    {link: "http://tympanus.net/Development/HoverEffectIdeas/index2.html", title: "Hover Effect Ideas. По ссылке больше примеров", video: "hover2.webm"},
                    {link: "http://tympanus.net/Tutorials/ShapeHoverEffectSVG/index.html", title: "Shape Hover Effect with SVG", video: "hover3.webm"}
                ]},
                {name: "Кнопки", page: "buttons", items: [
                    {link: "http://codepen.io/itsnoureddine/pen/QwEjpK", title: "Buttons menu", video: "button.webm"}
                ]},
                {name: "Попапы", page: "popups", items: [
                    {link: "http://tristanedwards.me/sweetalert", title: "Sweet Alert", video: "alert.webm"},
                    {link: "http://tympanus.net/Development/DialogEffects/index.html", title: "Dialog Effects. По ссылке больше примеров", video: "popups.webm"},
                ]},
                {name: "Переходы", page: "transitions", items: [
                    {link: "http://tympanus.net/Development/ArticleIntroEffects/", title: "Переход из картинки в контент", video: "perehod.webm"},
                    {link: "http://tympanus.net/Development/PageLoadingEffects/index3.html", title: "Красивая смена страницы. По ссылке больше примеров", video: "perehod2.webm"},
                    {link: "http://codepen.io/pixelass/pen/gixzc", title: "Apple Mac", video: "mac.webm"}
                ]},
                {name: "Лоадеры", page: "loaders", items: [
                    {link: "http://pasqualevitiello.github.io/Tumblr-Style-Cog-Spinners/", title: "Tumblr-Style Cog Loader", video: "loaders.webm"}
                ]},
                {name: "Иконки", page: "icons", items: [
                    {link: "http://fian.my.id/marka/", title: "Marka", video: "icons.webm"}
                ]},
                {name: "Прогресс бары", page: "progress-bars", items: [
                ]},

                {name: "Табы", page: "tabs", items: [
                ]}
            ]
        });
