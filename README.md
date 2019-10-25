# This repo is hosting all traning material 

## FlexBox
   - Flexbox offering simple but extermely powerful methods for layout, distributing, aliging and sizing. 
   - The child items in a container should be able to change dimentions "width and Height" by filling empty spcae if there is much or by shirinking. This happens when the amount of the content changes or the screen size changes. 
   
   - USAGE: Flexbox is only used for small-scale layouts header footer sidebars. CSS GRID layout is for largescale. 

### When Felxing ask your self: 
 1) In which direction you want the items to run
 2) How do you want the items arraged across the main axis
 3) How do you want the items arranged accross the cross axis
 4) Do you want the items to wrap
 
###  comparision between float old way vs flexing elements follow below 3 steps
1) floatVSflex.html creates a header with two elements and points to two css files.
2) stylefloat.css & styleflex.css files that are called by floatVSflex.html to move elements around.
3) you can only point to one css file at a time. /**/ comment out other line pointing to second css.

### Using tool like codepen use file flexdemo.html to learn flexing.
1) Add html div content in html side
3) copy the CSS declerations to CSS side.

### Best Practices
1) We use flex box to aviod positioning an element and make it work for all type of screen sizes. So aviod using width and height on container element you are flexing. so that it will always be at both ends of container. 

2) You can flex and use relative without offsetting the location. to adjust items that are inside the relative-flexed container "look at the cricles"

3) Buttons should only be a Form. but not sending us to another page. In that case use <a> 
  
4) Use Width on a container so that you can place elements next to eachother or use flex:1 and 1 look at the body of circles project with paragraph. 
