"use client";

// Web Audio API Synthesizer - No external audio files needed
class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Pure crystal water droplet "plink" sound
  public playDrop() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const startTime = this.ctx.currentTime;
      // High to low frequency drop simulating a water drop impact
      const startFreq = 1600 + Math.random() * 400;
      const endFreq = 2200 + Math.random() * 200;

      osc.type = "sine";
      osc.frequency.setValueAtTime(startFreq, startTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, startTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(startFreq * 0.8, startTime + 0.18);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.25);
    } catch {
      // AudioContext policy fallback
    }
  }

  // Deep cinematic rumble / whoosh for game-like transitions
  public playWhoosh() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      const startTime = this.ctx.currentTime;
      osc.type = "triangle";
      osc.frequency.setValueAtTime(80, startTime);
      osc.frequency.exponentialRampToValueAtTime(140, startTime + 0.15);
      osc.frequency.exponentialRampToValueAtTime(45, startTime + 0.5);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(400, startTime);
      filter.frequency.exponentialRampToValueAtTime(120, startTime + 0.5);

      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.55);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.6);
    } catch {
      // AudioContext policy fallback
    }
  }

  // Shimmering ripple chord
  public playRipple() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C Major chord
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.04;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq * 1.5, startTime);

        gain.gain.setValueAtTime(0.04, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.45);
      });
    } catch {
      // AudioContext policy fallback
    }
  }
}

export const sound = new SoundEngine();

