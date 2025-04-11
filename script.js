AFRAME.registerComponent('part-listener', {
    schema: {
      audioId: {type: 'string'}
    },
    init: function () {
      this.el.addEventListener('click', () => {
        const audio = document.querySelector(`#${this.data.audioId}`);
        audio.play();
      });
    }
  });
  
  // Example of attaching to parts of the model (use your real parts/positions)
  AFRAME.registerComponent('add-labels', {
    init: function () {
      const heart = document.querySelector('#heartModel');
  
      // Adjust the positions to be closer to visible areas of the heart model
      const parts = [
        {id: 'aorta', position: '0 0.2 0.3', label: 'Aorta', audioId: 'aortaAudio'},  // Updated position for better visibility
        {id: 'ventricle', position: '0 -0.3 0', label: 'Left Ventricle', audioId: 'ventricleAudio'}  // Adjusted position
      ];
  
      parts.forEach(part => {
        const partEl = document.createElement('a-entity');
        partEl.setAttribute('geometry', {primitive: 'sphere', radius: 0.05});
        partEl.setAttribute('position', part.position);
        partEl.setAttribute('material', 'color: red; opacity: 0.5');
        partEl.setAttribute('part-listener', `audioId: ${part.audioId}`);
        heart.appendChild(partEl);
  
        const label = document.createElement('a-text');
        label.setAttribute('value', part.label);
        label.setAttribute('position', part.position);
        label.setAttribute('scale', '0.3 0.3 0.3');
        label.setAttribute('color', 'white');
        label.setAttribute('align', 'center');
        heart.appendChild(label);
      });
    }
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#heartModel').setAttribute('add-labels', '');
  });
  