export default class TrackClass {
      constructor(name, soundfile, padsOn = Array(32).fill(false)) {
        this.name = name;
        this.soundfile = soundfile;
        this.padsOn = padsOn
      }
    }