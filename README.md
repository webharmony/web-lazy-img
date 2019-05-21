# web-lazy-img
Lazy load images element build with lit-element. Component uses IntersectionObserver.

## Usage
Install component via npm or download bundled file (in future will be cdn)
```npm
npm i @webharmony/web-lazy-img
```

```html
<web-lazy-img preload='images/1-preload.jpg' src="images/1.png"></web-lazy-img>
```

## Properties
### preload: String;
Url adress from low res tiny image that will be placeholder and blured

### src: String;
Url for proper image

### srcset: String;
Set of url for multiple images

### sizes: String;
Set of media queries that defines the size the img should be according to a set of media conditions

### alt: String;
Defines alt img property

### width: String;
Defines with of image, default value is 100%
### heigth: String;
Defines heigth of image, default value is 100%

## Private properties
### isVisible: Boolean;
### loaded: Boolean;