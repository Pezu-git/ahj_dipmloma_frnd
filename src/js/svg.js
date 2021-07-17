export default class SVG {
  createLoupe() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'loupe';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 512.005 512.005');

    this.path.setAttribute('d', `M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
      S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
      c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
      M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z`);
    this.g2.append(this.path);
    this.g1.append(this.g2);
    this.svg.append(this.g1);
    return this.svg;
  }

  createView() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon focus');
    this.svg.id = 'view';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 511.999 511.999');

    this.path1.setAttribute('d', `M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035
      c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201
      C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418
      c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418
      C447.361,287.923,358.746,385.406,255.997,385.406z`);

    this.path2.setAttribute('d', `M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275
      s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516
      s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z`);
    this.svg.append(this.path1, this.path2);
    return this.svg;
  }

  createSettings() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'settings';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 -53 384 384');

    this.path1.setAttribute('d', 'm368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0');
    this.path2.setAttribute('d', 'm368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0');
    this.path3.setAttribute('d', 'm368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0');

    this.svg.append(this.path1, this.path2, this.path3);
    return this.svg;
  }

  createCheck() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'check';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 512 512');

    this.path.setAttribute('d', `m473.074 120.729-203.295 203.296-21.212-21.212 153.765-153.764-38.926-38.926-153.765
      153.765-61.047-61.047-38.926 38.926 61.047 61.047-21.211 21.211-110.578-110.577-38.926 
      38.926 149.503 149.503 60.138-60.137 60.137 60.137 242.222-242.221z`);
    this.svg.append(this.path);
    return this.svg;
  }

  createPaperclip() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'paperclip';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 511.988 511.988');

    this.path.setAttribute('d', `M489.305,185.463c-8.354-8.309-21.861-8.272-30.17,0.081L202.687,443.379c-33.271,33.271-87.308,33.271-120.641-0.045
      c-33.308-33.325-33.308-87.362,0.004-120.674L346.089,57.234c20.772-20.771,54.543-20.771,75.375,0.045
      c20.826,20.826,20.826,54.593-0.005,75.425L202.727,351.434c-0.014,0.014-0.026,0.03-0.04,0.044
      c-8.333,8.287-21.8,8.276-30.116-0.04c-8.33-8.33-8.33-21.831,0-30.161l105.58-105.602c8.33-8.332,8.329-21.84-0.003-30.17
      c-8.332-8.33-21.84-8.329-30.17,0.003l-105.579,105.6c-24.991,24.991-24.991,65.507,0.002,90.499
      c24.992,24.992,65.508,24.992,90.501,0c0.029-0.029,0.052-0.06,0.08-0.089l218.646-218.646c37.494-37.494,37.494-98.276,0-135.77
      c-37.499-37.472-98.277-37.472-135.749,0L51.84,292.53C1.906,342.464,1.906,423.509,51.876,473.504
      c50.003,49.977,131.049,49.977,181.022,0.004l256.489-257.875C497.695,207.279,497.658,193.772,489.305,185.463z`);
    this.svg.append(this.path);
    return this.svg;
  }

  createSmile() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'smile';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 368 368');

    this.path1.setAttribute('d', `M261.336,226.04c-3.296-2.952-8.36-2.664-11.296,0.624C233.352,245.312,209.288,256,184,256
      c-25.28,0-49.352-10.688-66.04-29.336c-2.952-3.288-8-3.576-11.296-0.624c-3.296,2.944-3.568,8-0.624,11.296
      C125.76,259.368,154.176,272,184,272c29.832,0,58.248-12.64,77.96-34.664C264.904,234.04,264.624,228.984,261.336,226.04z`);
    this.path2.setAttribute('d', `M184,0C82.544,0,0,82.544,0,184s82.544,184,184,184s184-82.544,184-184S285.456,0,184,0z M184,352
      c-92.64,0-168-75.36-168-168S91.36,16,184,16s168,75.36,168,168S276.64,352,184,352z`);
    this.path3.setAttribute('d', `M248,128c-22.056,0-40,17.944-40,40c0,4.416,3.584,8,8,8c4.416,0,8-3.584,8-8c0-13.232,10.768-24,24-24s24,10.768,24,24
      c0,4.416,3.584,8,8,8c4.416,0,8-3.584,8-8C288,145.944,270.056,128,248,128z`);
    this.path4.setAttribute('d', `M144,168c0,4.416,3.584,8,8,8s8-3.584,8-8c0-22.056-17.944-40-40-40c-22.056,0-40,17.944-40,40c0,4.416,3.584,8,8,8
      s8-3.584,8-8c0-13.232,10.768-24,24-24S144,154.768,144,168z`);
    this.svg.append(this.path1, this.path2, this.path3, this.path4);
    return this.svg;
  }

  createMicrophone() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'microphone';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '-90 1 511 511.99899');

    this.path1.setAttribute('d', 'm332.464844 275.082031c0-8.429687-6.835938-15.265625-15.269532-15.265625-8.433593 0-15.269531 6.835938-15.269531 15.265625 0 74.6875-60.757812 135.445313-135.445312 135.445313-74.683594 0-135.441407-60.757813-135.441407-135.445313 0-8.429687-6.835937-15.265625-15.269531-15.265625-8.433593 0-15.269531 6.835938-15.269531 15.265625 0 86.378907 66.320312 157.539063 150.710938 165.273438v41.105469h-56.664063c-8.433594 0-15.269531 6.835937-15.269531 15.269531 0 8.433593 6.835937 15.269531 15.269531 15.269531h143.871094c8.429687 0 15.265625-6.835938 15.265625-15.269531 0-8.433594-6.835938-15.269531-15.265625-15.269531h-56.667969v-41.105469c84.394531-7.730469 150.714844-78.894531 150.714844-165.273438zm0 0');
    this.path2.setAttribute('d', 'm166.480469 372.851562c53.910156 0 97.769531-43.859374 97.769531-97.769531v-177.316406c0-53.90625-43.859375-97.765625-97.769531-97.765625-53.90625 0-97.765625 43.859375-97.765625 97.765625v177.316406c0 53.910157 43.859375 97.769531 97.765625 97.769531zm-67.230469-275.085937c0-37.070313 30.160156-67.226563 67.230469-67.226563 37.070312 0 67.230469 30.15625 67.230469 67.226563v177.316406c0 37.070313-30.160157 67.230469-67.230469 67.230469-37.070313 0-67.230469-30.160156-67.230469-67.230469zm0 0');
    this.svg.append(this.path1, this.path2);
    return this.svg;
  }

  createCamera() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'camera';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 420.8 420.8');

    this.path1.setAttribute('d', 'M406.8,96.4c-8.4-8.8-20-14-33.2-14h-66.4v-0.8c0-10-4-19.6-10.8-26c-6.8-6.8-16-10.8-26-10.8h-120 c-10.4,0-19.6,4-26.4,10.8c-6.8,6.8-10.8,16-10.8,26v0.8h-66c-13.2,0-24.8,5.2-33.2,14c-8.4,8.4-14,20.4-14,33.2v199.2 C0,342,5.2,353.6,14,362c8.4,8.4,20.4,14,33.2,14h326.4c13.2,0,24.8-5.2,33.2-14c8.4-8.4,14-20.4,14-33.2V129.6 C420.8,116.4,415.6,104.8,406.8,96.4z M400,328.8h-0.4c0,7.2-2.8,13.6-7.6,18.4s-11.2,7.6-18.4,7.6H47.2 c-7.2,0-13.6-2.8-18.4-7.6c-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2,2.8-13.6,7.6-18.4s11.2-7.6,18.4-7.6h77.2 c6,0,10.8-4.8,10.8-10.8V81.2c0-4.4,1.6-8.4,4.4-11.2s6.8-4.4,11.2-4.4h119.6c4.4,0,8.4,1.6,11.2,4.4c2.8,2.8,4.4,6.8,4.4,11.2 v11.6c0,6,4.8,10.8,10.8,10.8H374c7.2,0,13.6,2.8,18.4,7.6s7.6,11.2,7.6,18.4V328.8z');
    this.path2.setAttribute('d', 'M210.4,130.8c-27.2,0-52,11.2-69.6,28.8c-18,18-28.8,42.4-28.8,69.6s11.2,52,28.8,69.6c18,18,42.4,28.8,69.6,28.8 s52-11.2,69.6-28.8c18-18,28.8-42.4,28.8-69.6s-11.2-52-28.8-69.6C262.4,142,237.6,130.8,210.4,130.8z M264.8,284 c-14,13.6-33.2,22.4-54.4,22.4S170,297.6,156,284c-14-14-22.4-33.2-22.4-54.4c0-21.2,8.8-40.4,22.4-54.4 c14-14,33.2-22.4,54.4-22.4s40.4,8.8,54.4,22.4c14,14,22.4,33.2,22.4,54.4C287.6,250.8,278.8,270,264.8,284z');
    this.circle.setAttribute('cx', '352.8');
    this.circle.setAttribute('cy', '150');
    this.circle.setAttribute('r', '19.6');
    this.svg.append(this.path1, this.path2, this.circle);
    return this.svg;
  }

  createVideos() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'video';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 -87 472 472');

    this.path.setAttribute('d', 'm467.101562 26.527344c-3.039062-1.800782-6.796874-1.871094-9.898437-.179688l-108.296875 59.132813v-35.480469c-.03125-27.601562-22.398438-49.96875-50-50h-248.90625c-27.601562.03125-49.96875 22.398438-50 50v197.421875c.03125 27.601563 22.398438 49.96875 50 50h248.90625c27.601562-.03125 49.96875-22.398437 50-50v-34.835937l108.300781 59.132812c3.097657 1.691406 6.859375 1.625 9.894531-.175781 3.039063-1.804688 4.898438-5.074219 4.898438-8.601563v-227.816406c0-3.53125-1.863281-6.796875-4.898438-8.597656zm-138.203124 220.898437c-.015626 16.5625-13.4375 29.980469-30 30h-248.898438c-16.5625-.019531-29.980469-13.4375-30-30v-197.425781c.019531-16.558594 13.4375-29.980469 30-30h248.90625c16.558594.019531 29.980469 13.441406 30 30zm123.101562-1.335937-103.09375-56.289063v-81.535156l103.09375-56.285156zm0 0');
    this.svg.append(this.path);
    return this.svg;
  }

  createImages() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'image';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 512 512');

    this.path1.setAttribute('d', 'M446.575,0H65.425C29.349,0,0,29.35,0,65.426v381.149C0,482.65,29.349,512,65.425,512h381.15 C482.651,512,512,482.65,512,446.574V65.426C512,29.35,482.651,0,446.575,0z M481.842,446.575 c0,19.447-15.821,35.267-35.267,35.267H65.425c-19.447,0-35.268-15.821-35.268-35.267v-55.007l99.255-84.451 c3.622-3.082,8.906-3.111,12.562-0.075l62.174,51.628c5.995,4.977,14.795,4.569,20.304-0.946L372.181,209.77 c2.67-2.675,5.783-2.935,7.408-2.852c1.62,0.083,4.695,0.661,7.078,3.596l95.176,117.19V446.575z M481.842,279.865l-71.766-88.366 c-7.117-8.764-17.666-14.122-28.942-14.701c-11.268-0.57-22.317,3.672-30.294,11.662L212.832,326.681l-51.59-42.839 c-14.959-12.422-36.563-12.293-51.373,0.308l-79.712,67.822V65.426c0-19.447,15.821-35.268,35.268-35.268h381.15 c19.447,0,35.267,15.821,35.267,35.268V279.865z');
    this.path2.setAttribute('d', 'M161.174,62.995c-40.095,0-72.713,32.62-72.713,72.713c0,40.094,32.619,72.713,72.713,72.713s72.713-32.619,72.713-72.713 S201.269,62.995,161.174,62.995z M161.174,178.264c-23.466,0-42.556-19.091-42.556-42.556c0-23.466,19.09-42.556,42.556-42.556 c23.466,0,42.556,19.091,42.556,42.556S184.64,178.264,161.174,178.264z');
    this.svg.append(this.path1, this.path2);
    return this.svg;
  }

  createAudios() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'audio';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 512 512');

    this.path1.setAttribute('d', 'M256,31C115.39,31,0,145.39,0,286v120c0,24.814,20.186,45,45,45h15V301H45c-5.284,0-10.285,1.082-15,2.763V286 C30,161.928,131.928,61,256,61s226,100.928,226,225v17.763c-4.715-1.681-9.716-2.763-15-2.763h-15v150h15 c24.814,0,45-20.186,45-45V286C512,145.39,396.61,31,256,31z');
    this.path2.setAttribute('d', 'M135,271h-15c-16.569,0-30,13.431-30,30v150c0,16.569,13.431,30,30,30h15c8.284,0,15-6.716,15-15V286 C150,277.716,143.284,271,135,271z');
    this.path3.setAttribute('d', 'M392,271h-15c-8.284,0-15,6.716-15,15v180c0,8.284,6.716,15,15,15h15c16.569,0,30-13.431,30-30V301 C422,284.431,408.569,271,392,271z');

    this.svg.append(this.path1, this.path2, this.path3);
    return this.svg;
  }

  createDocs() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'message';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 470.586 470.586');

    this.path.setAttribute('d', `M327.081,0H90.234C74.331,0,61.381,12.959,61.381,28.859v412.863c0,15.924,12.95,28.863,28.853,28.863H380.35
      c15.917,0,28.855-12.939,28.855-28.863V89.234L327.081,0z M333.891,43.184l35.996,39.121h-35.996V43.184z M384.972,441.723
      c0,2.542-2.081,4.629-4.635,4.629H90.234c-2.55,0-4.619-2.087-4.619-4.629V28.859c0-2.548,2.069-4.613,4.619-4.613h219.411v70.181
      c0,6.682,5.443,12.099,12.129,12.099h63.198V441.723z M128.364,128.89H334.15c5.013,0,9.079,4.066,9.079,9.079
      c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079C119.285,132.957,123.352,128.89,128.364,128.89z
      M343.229,198.98c0,5.012-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
      C339.163,189.901,343.229,193.968,343.229,198.98z M343.229,257.993c0,5.013-4.066,9.079-9.079,9.079H128.364
      c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15C339.163,248.914,343.229,252.98,343.229,257.993z
      M343.229,318.011c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
      C339.163,308.932,343.229,312.998,343.229,318.011z`);
    this.svg.append(this.path);
    return this.svg;
  }

  createLinks() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'link';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 511.997 511.997');

    this.path1.setAttribute('d', 'M211.26,389.24l-60.331,60.331c-25.012,25.012-65.517,25.012-90.508,0.005c-24.996-24.996-24.996-65.505-0.005-90.496 l120.683-120.683c24.991-24.992,65.5-24.992,90.491,0c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17 c-41.654-41.654-109.177-41.654-150.831,0L30.247,328.909c-41.654,41.654-41.654,109.177,0,150.831 c41.649,41.676,109.177,41.676,150.853,0l60.331-60.331c8.331-8.331,8.331-21.839,0-30.17S219.591,380.909,211.26,389.24z');
    this.path2.setAttribute('d', 'M479.751,30.24c-41.654-41.654-109.199-41.654-150.853,0l-72.384,72.384c-8.331,8.331-8.331,21.839,0,30.17 c8.331,8.331,21.839,8.331,30.17,0l72.384-72.384c24.991-24.992,65.521-24.992,90.513,0c24.991,24.991,24.991,65.5,0,90.491 L316.845,283.638c-24.992,24.992-65.5,24.992-90.491,0c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17 c41.654,41.654,109.177,41.654,150.831,0l132.736-132.736C521.405,139.418,521.405,71.894,479.751,30.24z');

    this.svg.append(this.path1, this.path2);
    return this.svg;
  }
}
