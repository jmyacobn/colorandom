class Palette {
  constructor(color1, color2, color3, color4, color5) {
    this.color1 = color1.code;
    this.lock1 = color1.locked;
    this.color2 = color2.code;
    this.lock2 = color2.locked;
    this.color3 = color3.code;
    this.lock3 = color3.locked;
    this.color4 = color4.code;
    this.lock4 = color4.locked;
    this.color5 = color5.code;
    this.lock5 = color5.locked;
    this.id = Date.now();
  };
};
