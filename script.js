AFRAME.registerComponent('add-labels-on-load', {
  init: function () {
    this.el.addEventListener('model-loaded', () => {
      this.el.setAttribute('add-labels', '');
    });
  }
});

AFRAME.registerComponent('add-labels', {
  init: function () {
    const parts = [
      {
        name: 'Aorta',
        position: { x: 0.3, y: 1.1, z: 0 }
      },
      {
        name: 'Left Ventricle',
        position: { x: -0.5, y: 0.2, z: 0 }
      }
    ];

    parts.forEach((part) => {
      // Label
      const label = document.createElement('a-entity');
      label.setAttribute('text', {
        value: part.name,
        align: 'center',
        width: 2,
        color: '#000'
      });
      label.setAttribute('position', part.position);
      label.setAttribute('geometry', {
        primitive: 'plane',
        height: 0.3,
        width: 1.2
      });
      label.setAttribute('material', {
        color: '#fff',
        opacity: 0.9
      });
      this.el.appendChild(label);

      // Clickable invisible sphere to play beep
      const sphere = document.createElement('a-sphere');
      sphere.setAttribute('radius', 0.1);
      sphere.setAttribute('position', part.position);
      sphere.setAttribute('material', 'opacity: 0; transparent: true;');
      sphere.setAttribute('play-beep-on-click', '');
      this.el.appendChild(sphere);
    });
  }
});

AFRAME.registerComponent('play-beep-on-click', {
  init: function () {
    this.el.addEventListener('click', () => {
      const audio = document.getElementById('beepAudio');
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.play().catch(err => {
          console.warn('Audio play error:', err);
        });
      }
    });
  }
});
