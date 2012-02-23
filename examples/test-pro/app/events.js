App.Events = (function(lng, undefined) {

    lng.ready(function(){
        console.error('LUNGO.js is ready...');
        App.Services.mockProfiles();


        var homes = [
            {id: 1, name: 'lemoa'},
            {id: 2, name: 'zalla'}
        ];

        lng.View.Template.List.create({
            el: '#art-3',
            template: 'home-tmp',
            data: homes
        })
    });

    //Toggle Aside

    //Event on dinamic items
    lng.dom('#list-auto').on('swipeLeft', 'li', function(event){
        console.error(this, event, 'swipe');
    });

    //List.Append & List.prepend
    lng.dom('#test header a.red').tap(function(event) {
        var param = {
            el: '#list-added',
            template: 'profile-tmp',
            data: {
                name: 'Javier Jimenez Villar',
                description: '@soyjavi'
            }
        };

        if ($$(this).hasClass('prepend')) {
            lng.View.Template.List.append(param);
        } else {
            lng.View.Template.List.prepend(param);
        }
    });

    //Scroll.Append & Scroll.Last // Scroll.first & Scroll.last
    lng.dom('#test header a.green').tap(function(event) {
        lng.View.Scroll.append('scroll-horizontal', '<span>1</span>');
        lng.View.Scroll.first('scroll-horizontal');

        lng.View.Scroll.append('scroll-vertical', '<span>1</span>');
        lng.View.Scroll.last('scroll-vertical');
    });

    //Remove Item >> Scroll.refresh
    lng.dom('article#list-added li').tap(function(event) {
        $$(this).remove();
        lng.View.Scroll.refresh('list-added');
    });

    //SPECIAL
    $$('section#test').on('load', function(event) {
        console.error('Load #test', event);
        lng.Router.article('#next', '#files');
    });

    $$('section#test').on('unload', function(event) {
        console.error('Unload #test', event);
    });

    $$('article#art-2').on('load', function(event) {
        console.error('load article', this, event);
    });

    $$('article#art-1').on('unload', function(event) {
        console.error(LUNGO.Constants)
        console.error('unload article', this, event);
    });

})(LUNGO);