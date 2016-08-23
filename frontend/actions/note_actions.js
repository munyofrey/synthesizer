export const NotesConstants = {
  KEY_PRESSED: 'KEY_PRESSED',
  KEY_RELEASED: 'KEY_RELEASED',
};

export const keyPressed = key => ({
  type: NotesConstants.KEY_PRESSED,
  key: key
});

export const keyReleased = key => ({
  type: NotesConstants.KEY_RELEASED,
  key: key
});
