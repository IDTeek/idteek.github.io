import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-product',
    imports: [NgFor, MatIconModule, HttpClientModule, CommonModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    standalone: true
})
export class ProductComponent {
    
    slides = [
        {
            category: 'Daily Life',
            bg: 'assets/scene/dailylife.jpg',
            icon: 'coffee',
            index: 0,
            scenes:
                [{
                    scene: 'Bedroom',
                    bg: 'assets/scene/bedroom.jpg',
                    pages: [
                        {
                            title: 'Reminder',
                            content: 'Not forgetting anything you tried to remember last night, the smart reminder can pop up in whenever you need it.',
                            icon: 'checklist',
                            image: 'assets/scene_foreground/reminder.png',
                            index: 0
                        },
                        {
                            title: 'Day Planning',
                            content: 'Go over your daily arrangement, check for weather and plan your day with ease.',
                            icon: 'today',
                            image: 'assets/scene_foreground/planning.png',
                            index: 1
                        },
                        {
                            title: 'Family Time',
                            content: 'Keep in touch with your family and friends, share your moments and keep your relationship strong.',
                            icon: 'family_restroom',
                            image: 'assets/scene_foreground/family.png',
                            index: 2
                        }
                    ]
                }, {
                    scene: 'Kitchen',
                    bg: 'assets/scene/kitchen.jpg',
                    pages: [
                        {
                            title: 'Recipe and Health',
                            content: 'Cooking is no longer a problem, the recipe is always there for you to follow. You can even choose to eat healthily with our diet planning app.',
                            icon: 'restaurant',
                            image: 'assets/scene_foreground/recipe.png',
                            index: 3
                        },
                        {
                            title: 'Smart Home',
                            content: 'Control your smart home devices like you have magic, all of them are in your view and at your disposal.',
                            icon: 'house',
                            image: 'assets/scene_foreground/smart_home.png',
                            index: 4
                        }
                    ]
                }]
        }, {
            category: 'Productivity',
            bg: 'assets/scene/productivity.jpg',
            icon: 'dvr',
            index: 5,
            scenes: [{
                scene: 'Office',
                bg: 'assets/scene/office.jpg',
                pages: [
                    {
                        title: 'Work',
                        content: 'Never work on small screen again, you have an entire world to accomplish your task.',
                        icon: 'work_alert',
                        image: 'assets/scene_foreground/work.png',
                        index: 5
                    }
                ]
            }, {
                scene: 'Meeting Room',
                bg: 'assets/scene/meetingroom.jpg',
                pages: [
                    {
                        title: 'Meeting',
                        content: 'Join an in person meeting with people around the world with VuMeet, and interact with them in real life.',
                        icon: 'groups_3',
                        image: 'assets/scene_foreground/meeting.png',
                        index: 6
                    },
                    {
                        title: 'Presentation',
                        content: 'Present your idea in the most creative way, with a new dimension available to display data, and allow for customer interaction.',
                        icon: 'co_present',
                        image: 'assets/scene_foreground/presentation.png',
                        index: 7
                    }
                ]
            }, {
                scene: 'Factory',
                bg: 'assets/scene/factory.jpg',
                pages: [
                    {
                        title: 'Production',
                        content: 'Monitor your production line in real-time, and control it with ease.',
                        icon: 'precision_manufacturing',
                        image: 'assets/scene_foreground/production.png',
                        index: 8
                    },
                    {
                        title: 'Instruction',
                        content: 'Receive instruction in front of your eye, never get distracted by looking at the manual again.',
                        icon: 'support_agent',
                        image: 'assets/scene_foreground/instruction.png',
                        index: 9
                    }
                ]
            }]
        }, {
            category: 'Entertainment',
            bg: 'assets/scene/entertainment.jpg',
            icon: 'weekend',
            index: 10,
            scenes: [{
                scene: 'gym',
                bg: 'assets/scene/gym.jpg',
                pages: [
                    {
                        title: 'Workout',
                        content: 'Workout with the best coach, and keep track of your progress.',
                        icon: 'fitness_center',
                        image: 'assets/scene_foreground/workout.png',
                        index: 10
                    }
                ]
            }, {
                scene: 'Living Room',
                bg: 'assets/scene/livingroom.jpg',
                pages: [
                    {
                        title: 'Productions',
                        content: 'Enjoy your favorite TV shows, movies, and music with the best quality and the most comfortable way without even the need for TV',
                        icon: 'theaters',
                        image: 'assets/scene_foreground/production.png',
                        index: 11
                    },
                    {
                        title: 'Gaming',
                        content: 'Play your favorite games in a brand new dimension, even compatible with existing games from day one.',
                        icon: 'sports_esports',
                        image: 'assets/scene_foreground/gaming.png',
                        index: 12
                    }
                ]
            }, {
                scene: 'Hiking',
                bg: 'assets/scene/hiking.jpg',
                pages: [
                    {
                        title: 'Hiking Instruction',
                        content: 'Never get lost again, the hiking instruction system is always there to find the best route to hike and plan your stamina.',
                        icon: 'hiking',
                        image: 'assets/scene_foreground/hiking.png',
                        index: 13
                    }
                ]
            },]
        }, {
            category: 'Travel',
            bg: 'assets/scene/travel.jpg',
            icon: 'public',
            index: 14,
            scenes: [{
                scene: 'Airport',
                bg: 'assets/scene/airport.jpg',
                pages: [
                    {
                        title: 'Flight Information',
                        content: 'Check your flight information and gate number with ease, and never miss your flight again.',
                        icon: 'flight_takeoff',
                        image: 'assets/scene_foreground/flight.png',
                        index: 14
                    }
                ]
            }, {
                scene: 'Tourist Attraction',
                bg: 'assets/scene/museum.jpg',
                pages: [
                    {
                        title: 'Tourist Information',
                        content: 'Check the attraction and tourist information whenever you visit a new place and never miss the best part of it.',
                        icon: 'travel_explore',
                        image: 'assets/scene_foreground/tourist.png',
                        index: 15
                    }
                ]
            }, {
                scene: 'Road',
                bg: 'assets/scene/road.jpg',
                pages: [
                    {
                        title: 'Navigation',
                        content: 'Never get lost again, the navigation system is always there to guide you to your destination.',
                        icon: 'map',
                        image: 'assets/scene_foreground/navigation.png',
                        index: 16
                    }
                ]
            }, {
                scene: 'Foreign Country',
                bg: 'assets/scene/foreign.jpg',
                pages: [
                    {
                        title: 'Translation',
                        content: 'Enjoy foreign destination like home, communicate with people from all over the world without any language barrier.',
                        icon: 'translate',
                        image: 'assets/scene_foreground/translation.png',
                        index: 17
                    }
                ]
            }]
        }
    ]
    contentHeight = 0;
    @ViewChild('contentElem') contentElem!: ElementRef;
    @ViewChild('imageElem') imageElem!: ElementRef;
    @ViewChild('currentBg') currentBg!: ElementRef;
    @ViewChild('foregroundContent') foregroundImage!: ElementRef;
    @ViewChild('foregroundOverlayContent') foregroundOverlayImage!: ElementRef;
    @ViewChild('foregroundMeetOverlay') foregroundMeetOverlay!: ElementRef;
    contents: { title: string; content: string; icon: string; image:string }[] = [];
    guideBar: { title:string, icon:string, index:number, item:{title: string, icon:string, index:number, category: number}[] }[] = [];
    index: { currentCategoryIndex: number, currentSceneIndex: number }[] = [];
    images: string[] = [];
    page_index: number[] = [];
    display_category = -1;
    display_scene = 0;
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // combine all content in slides/scenes/pages
        var categoryIndex = 0;
        var sceneIndex = 0;
        this.slides.forEach(slide => {
            var categroy_items:{title: string, icon:string, index:number, category:number}[] = [];
            slide.scenes.forEach(scene => {
                this.images.push(scene.bg);
                this.page_index.push(this.contents.length);
                scene.pages.forEach(page => {
                    this.contents.push(page);
                    this.index.push({ currentCategoryIndex: categoryIndex, currentSceneIndex: sceneIndex });
                    categroy_items.push({title: page.title, icon: page.icon, index: page.index, category: categoryIndex});
                });
                sceneIndex++;

            });
            this.guideBar.push({ title: slide.category, icon:slide.icon, index: categoryIndex, item: categroy_items });
            sceneIndex = 0;
            categoryIndex++;
        });
        
        // console.log(this.guideBar[3].item);
    }

    ngAfterViewInit() {
        // Get the height for each of the element with id content.title
        this.foregroundMeetOverlay.nativeElement.style.transform = 'translateY(2000px)';
    }

    private scrollTimeout: any;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event) {
        if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
        }
        var scrollHeight = window.scrollY;
        var foregroundScrollHeight = scrollHeight * 2;
        this.foregroundImage.nativeElement.style.transform = 'translateY(-' + foregroundScrollHeight + 'px)';
        var contentHeight = this.contentElem.nativeElement.scrollHeight;
        var scrollIndex = Math.round(scrollHeight / contentHeight);
        this.display_scene = scrollIndex;
        // var nextPageIndex = Math.ceil(scrollHeight / contentHeight);
        // if (nextPageIndex in this.page_index) {
        
        // }
        var nextPageIndex = Math.ceil(scrollHeight / contentHeight);
        var scrollTransformY = 0;
        if (this.page_index.indexOf(nextPageIndex) !== -1) {
            console.log('next page index', nextPageIndex);
            scrollTransformY = scrollHeight % contentHeight - contentHeight;
            console.log('scroll transform y', scrollTransformY);
        }
        var scrollLength = 0;
        for (var i = 0; i < this.page_index.length; i++) {
            if (this.page_index[i] > nextPageIndex) {
                scrollLength = (i -1) * contentHeight;
                console.log('scroll length', scrollLength);
                break;
            }
            if (nextPageIndex === this.page_index[this.page_index.length - 1]) {
                scrollLength = (this.page_index.length - 1) * contentHeight;
                console.log('scroll length', scrollLength);
            }
            if (nextPageIndex > this.page_index[this.page_index.length - 1]) {
                scrollLength = (this.page_index.length - 1) * contentHeight;
                scrollTransformY = 0;
                console.log('scroll length', scrollLength);
                break;
            }
        }
        if (scrollHeight % contentHeight === 0) {
            scrollTransformY = 0;
        }
        var totalScroll = scrollLength + scrollTransformY;
        console.log('scroll length', scrollLength);

        var meetOverlayHeight = contentHeight * 3;
        this.foregroundMeetOverlay.nativeElement.style.transform = 'translateY(' + meetOverlayHeight + 'px)';
        this.currentBg.nativeElement.style.transform = 'translateY(-' + totalScroll + 'px)';
        this.foregroundOverlayImage.nativeElement.style.transform = 'translateY(-' + totalScroll + 'px)';
        // var nextCategoryIndex = this.index[nextPageIndex].currentCategoryIndex;
        // var nextSceneIndex = this.index[nextPageIndex].currentSceneIndex;
        // var currCategoryIndex = this.index[currentPageIndex].currentCategoryIndex;
        // var currSceneIndex = this.index[currentPageIndex].currentSceneIndex;
        // console.log('current category index', currCategoryIndex, 'current scene index', currSceneIndex);
        // console.log('next category index', nextCategoryIndex, 'next scene index', nextSceneIndex);
        
        
        // // If we are scrolling to the next page, we will need to animate the background
        // if (currSceneIndex < nextSceneIndex || (currSceneIndex > nextSceneIndex && currCategoryIndex < nextCategoryIndex)) {
        //     // For scrolling forward

        //     var currTransValue = -(scrollHeight % contentHeight);
        //     var nextTransValue = - (scrollHeight % contentHeight);
        //     this.prevBg.nativeElement.style.opacity = '1';
        //     this.currentBg.nativeElement.style.opacity = '1';
        //     this.prevBg.nativeElement.style.transform = 'translateY(' + currTransValue + 'px)'; // The prevBg is the current page background
        //     this.currentBg.nativeElement.style.transform = 'translateY(' + nextTransValue + 'px)'; //The currentBg is the next page background
        //     this.prevCategoryIndex = nextCategoryIndex;
        //     this.prevSceneIndex = nextSceneIndex;
        //     console.log('setting the prev image to be' + this.slides[nextCategoryIndex].scenes[nextSceneIndex].bg);
        //     this.currentCategoryIndex = currCategoryIndex;
        //     this.currentSceneIndex = currSceneIndex;
        //     console.log('setting the current image to be' + this.slides[currCategoryIndex].scenes[currSceneIndex].bg);
        // }
        
        this.scrollTimeout = setTimeout(() => {
            var destinationHeight = scrollIndex * contentHeight;

            window.scrollTo({
                top: destinationHeight,
                behavior: 'smooth'
            });
        }, 50); // Adjust the timeout duration as needed
    }
    // onWindowScroll(event: Event) {
    //     console.log('scrolling');
    //     console.log(window.scrollY);
    //     if (this.scrollTimeout) {
    //         clearTimeout(this.scrollTimeout);
    //     }
    //     console.log(event as any);
    //     console.log(this.contentElem.nativeElement.scrollHeight);
    //     const scrollDirection = (event as any).wheelDelta > 0 ? 'up' : 'down';


    //     this.scrollTimeout = setTimeout(() => {
    //         // log
    //         console.log('scrolling ended');
    //         this.prevCategoryIndex = this.currentCategoryIndex;
    //         this.prevSceneIndex = this.currentSceneIndex;
    //         this.prevPageIndex = this.currentPageIndex;

    //         if (scrollDirection === 'down') {
    //             console.log('scrolling down');
    //             if (this.currentPageIndex < this.slides[this.currentCategoryIndex].scenes[this.currentSceneIndex].pages.length - 1) {
    //                 this.currentPageIndex++;
    //             } else if (this.currentSceneIndex < this.slides[this.currentCategoryIndex].scenes.length - 1) {
    //                 this.currentSceneIndex++;
    //                 this.currentPageIndex = 0;
    //             } else if (this.currentCategoryIndex < this.slides.length - 1) {
    //                 this.currentCategoryIndex++;
    //                 this.currentSceneIndex = 0;
    //                 this.currentPageIndex = 0;
    //             } else {
    //                 console.log('end of the slide');
    //             }
    //         } else if (scrollDirection === 'up') {
    //             console.log('scrolling up');
    //             if (this.currentPageIndex > 0) {
    //                 this.currentPageIndex--;
    //             } else if (this.currentSceneIndex > 0) {
    //                 this.currentSceneIndex--;
    //                 this.currentPageIndex = this.slides[this.currentCategoryIndex].scenes[this.currentSceneIndex].pages.length - 1;
    //             } else if (this.currentCategoryIndex > 0) {
    //                 this.currentCategoryIndex--;
    //                 this.currentSceneIndex = this.slides[this.currentCategoryIndex].scenes.length - 1;
    //                 this.currentPageIndex = this.slides[this.currentCategoryIndex].scenes[this.currentSceneIndex].pages.length - 1;
    //             } else {
    //                 console.log('start of the slide');
    //             }
    //         }

    //         console.log(this.currentCategoryIndex, this.currentSceneIndex, this.currentPageIndex);

    //     }, 100); // Adjust the timeout duration as needed
    // }

    changeScene(index: number) {
        if (index < 0 || index > this.contents.length - 1) {
            return;
        }
        var contentHeight = this.contentElem.nativeElement.scrollHeight
        this.display_scene = index;
        console.log('changing scene to', index);
        window.scrollTo({
            top: index * contentHeight,
            behavior: 'smooth'
        });
    }

    shiftScene(amount: number) {
        
        this.changeScene(this.display_scene + amount);
    }

    changeCategory(category: number){
        console.log('changing category to', category);
        if (this.display_category === category) {
            this.display_category = -1;
        } else {
            this.display_category = category;
        }
    }

}

