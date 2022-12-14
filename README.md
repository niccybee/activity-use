
# Exploring the an education activity interface.

## Initial Mock-up

![initial mock-up for the design](./public/eg.png)

## Play by play

A UI experiment for educational activity design. 

Exploring different aspects of the activity interface design.

Initial attempts trying to use Swipr library to emulate slides and swipe action. Then placing cards inside each 'slide'

Fiddled with cards per page, mobile worked best at 2 desktop at 3 per page. May need to resize later– gave up no 'auto' which seemed to want to make the full page per slide.

/![spacing issues with slides](./public/spacing-issues.png)

Refactoring the cards so we can have an initial circle card on beginning and a finish card. Also need card to change dependent on which type of interaction it will be.




## Definitions

 **activity** - a standalone piece of coursework that would sit inside a course

The way I think about an activity.
 subject > course > unit  > learning activity > interaction (?)


## Initial Thoughts:

Multi-step vertical swipe mechanism.
- Current most popular social media is Tik Tok, the movements on mobile navigation are embedded in common muscle-memory
- swipe up to continue learning, videos in each section 
- activities and activity log should saved as you progress (local and push to db)

- [ ] Connection between individual interactions
- [ ] Visual flow between description and interaction block


## Needs:

- [ ] Show correct or incorrect state based on interaction.
- [ ] A panel to indicate activity completeness and (?) success

- [/] Mobile-friendly interface ->

  - [/] Snap to scroll sections 
  - [/] Max-widths (380px) - currently 500px


[ ] Different interaction types ->

- [/] Info Box
- [ ] Example Box
- [ ] Multi-choice - in progress
- [ ] Spelling
- [ ] Listen & Repeat
- [ ] Custom HTML ? 
- [/] Video


## New Tasks
- [ ] Net and back buttons for navigating the interaction

## Outside Initial Scope 

[ ] Fonts for learning exploration