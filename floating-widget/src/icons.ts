export function createSparkleIcon(size: string = '14px', color: string = 'white'): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.style.flexShrink = '0';
  
  svg.innerHTML = `
    <path d="M12 2L13.09 8.26L19 7L13.09 8.26L12 2Z" fill="${color}"/>
    <path d="M12 22L10.91 15.74L5 17L10.91 15.74L12 22Z" fill="${color}"/>
    <path d="M22 12L15.74 10.91L17 5L15.74 10.91L22 12Z" fill="${color}"/>
    <path d="M2 12L8.26 13.09L7 19L8.26 13.09L2 12Z" fill="${color}"/>
    <circle cx="12" cy="12" r="2" fill="${color}"/>
  `;
  
  return svg;
}

export function createVoiceIcon(size: string = '18px', color: string = 'white'): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.style.flexShrink = '0';
  
  svg.innerHTML = `
    <path d="M12 1C13.1 1 14 1.9 14 3V11C14 12.1 13.1 13 12 13C10.9 13 10 12.1 10 11V3C10 1.9 10.9 1 12 1Z" fill="${color}"/>
    <path d="M19 11C19 15.4 15.4 19 11 19V21C16.5 21 21 16.5 21 11H19Z" fill="${color}"/>
    <path d="M5 11C5 15.4 8.6 19 13 19V21C7.5 21 3 16.5 3 11H5Z" fill="${color}"/>
    <path d="M12 19V23" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <path d="M8 23H16" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
  `;
  
  return svg;
}

export function createCloseIcon(size: string = '16px', color: string = 'white'): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.style.flexShrink = '0';
  
  svg.innerHTML = `
    <path d="M18 6L6 18" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6L18 18" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `;
  
  return svg;
}

export function createMinimizeIcon(size: string = '16px', color: string = 'white'): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.style.flexShrink = '0';
  
  svg.innerHTML = `
    <path d="M19 12H5" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `;
  
  return svg;
}

export function createMoreIcon(width: string = '17px', height: string = '16px', color: string = 'white'): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', '0 0 17 16');
  svg.setAttribute('fill', 'none');
  svg.style.flexShrink = '0';
  
  svg.innerHTML = `
    <g clip-path="url(#clip0_2230_4947)">
      <path d="M4.26066 15.2827L3.72947 14.7789C3.42351 14.4888 3.42351 14.0184 3.72947 13.7284L10.9341 5.90218C11.2401 5.61203 11.7361 5.61203 12.0419 5.90218L12.5731 6.40592C12.8791 6.69607 12.8791 7.16647 12.5731 7.45644L5.36843 15.2827C5.06247 15.5728 4.56643 15.5728 4.26066 15.2827Z" fill="${color}"/>
      <path d="M8.36933 4.23132C5.41823 4.74659 4.97783 5.16424 4.43466 7.96263C3.8915 5.16424 3.45109 4.74659 0.5 4.23132C3.45109 3.71622 3.8915 3.29858 4.43466 0.5C4.97783 3.29858 5.41843 3.71622 8.36933 4.23132Z" fill="${color}"/>
      <path d="M16.4996 2.66222C14.7895 2.9608 14.5342 3.20278 14.2195 4.82444C13.9047 3.20278 13.6495 2.96062 11.9395 2.66222C13.6495 2.36364 13.9049 2.12167 14.2195 0.5C14.5344 2.12167 14.7895 2.36383 16.4996 2.66222Z" fill="${color}"/>
      <path d="M16.2202 10.0759C15.0927 10.2728 14.9245 10.4323 14.717 11.5015C14.5094 10.4323 14.3411 10.2728 13.2139 10.0761C14.3413 9.87914 14.5096 9.71959 14.717 8.65039C14.9247 9.71959 15.0929 9.87914 16.2202 10.0759Z" fill="${color}"/>
    </g>
    <defs>
      <clipPath id="clip0_2230_4947">
        <rect width="16" height="15" fill="white" transform="translate(0.5 0.5)"/>
      </clipPath>
    </defs>
  `;
  
  return svg;
}

export function createAIStarsIcon(width: string = '14px', height: string = '18px'): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', '0 0 14 18');
  svg.setAttribute('fill', 'none');
  svg.style.flexShrink = '0';
  
  // Generate unique IDs for this instance to avoid conflicts
  const gradientId = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
  
  svg.innerHTML = `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.164 0.51909L11.3607 2.03297C11.4341 2.5971 11.7788 3.03918 12.2187 3.13326L13.3993 3.38551C13.4862 3.40382 13.5543 3.49117 13.5686 3.60262C13.587 3.74606 13.5112 3.88147 13.3993 3.90504L12.2187 4.15739C11.7788 4.25143 11.4341 4.69351 11.3607 5.25762L11.164 6.77149C11.1498 6.88307 11.0816 6.97049 10.9946 6.98876C10.8827 7.01226 10.7772 6.91497 10.7588 6.77149L10.5621 5.25762C10.4888 4.69348 10.144 4.2514 9.70406 4.15739L8.52347 3.90504C8.43656 3.88673 8.36844 3.79938 8.35419 3.68793C8.33582 3.54448 8.41161 3.40907 8.52347 3.38551L9.70406 3.13326C10.144 3.03925 10.4888 2.59713 10.5621 2.03297L10.7588 0.51909C10.7731 0.407538 10.8413 0.320098 10.9283 0.301838C11.0401 0.27835 11.1457 0.375619 11.164 0.51909ZM5.62492 4.756L6.01842 7.78367C6.16499 8.91188 6.85441 9.79601 7.7342 9.98414L10.0953 10.4886C10.2691 10.5253 10.4053 10.7 10.4339 10.9228C10.4706 11.2097 10.3191 11.4805 10.0953 11.5276L7.7342 12.0323C6.85444 12.2204 6.16502 13.1045 6.01842 14.2327L5.62492 17.2604C5.59644 17.4835 5.46007 17.6583 5.28609 17.6948C5.06234 17.7418 4.85125 17.5473 4.81461 17.2604L4.42113 14.2327C4.27448 13.1044 3.58498 12.2203 2.70512 12.0323L0.344073 11.5276C0.170269 11.491 0.034035 11.3163 0.00549005 11.0935C-0.0312554 10.8066 0.120333 10.5358 0.344073 10.4886L2.70512 9.98414C3.58501 9.79611 4.2745 8.91195 4.42113 7.78367L4.81461 4.756C4.84311 4.5329 4.97948 4.35803 5.15343 4.32151C5.37721 4.27456 5.5883 4.46908 5.62492 4.756Z" fill="#B8FFE3"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.164 0.51909L11.3607 2.03297C11.4341 2.5971 11.7788 3.03918 12.2187 3.13326L13.3993 3.38551C13.4862 3.40382 13.5543 3.49117 13.5686 3.60262C13.587 3.74606 13.5112 3.88147 13.3993 3.90504L12.2187 4.15739C11.7788 4.25143 11.4341 4.69351 11.3607 5.25762L11.164 6.77149C11.1498 6.88307 11.0816 6.97049 10.9946 6.98876C10.8827 7.01226 10.7772 6.91497 10.7588 6.77149L10.5621 5.25762C10.4888 4.69348 10.144 4.2514 9.70406 4.15739L8.52347 3.90504C8.43656 3.88673 8.36844 3.79938 8.35419 3.68793C8.33582 3.54448 8.41161 3.40907 8.52347 3.38551L9.70406 3.13326C10.144 3.03925 10.4888 2.59713 10.5621 2.03297L10.7588 0.51909C10.7731 0.407538 10.8413 0.320098 10.9283 0.301838C11.0401 0.27835 11.1457 0.375619 11.164 0.51909ZM5.62492 4.756L6.01842 7.78367C6.16499 8.91188 6.85441 9.79601 7.7342 9.98414L10.0953 10.4886C10.2691 10.5253 10.4053 10.7 10.4339 10.9228C10.4706 11.2097 10.3191 11.4805 10.0953 11.5276L7.7342 12.0323C6.85444 12.2204 6.16502 13.1045 6.01842 14.2327L5.62492 17.2604C5.59644 17.4835 5.46007 17.6583 5.28609 17.6948C5.06234 17.7418 4.85125 17.5473 4.81461 17.2604L4.42113 14.2327C4.27448 13.1044 3.58498 12.2203 2.70512 12.0323L0.344073 11.5276C0.170269 11.491 0.034035 11.3163 0.00549005 11.0935C-0.0312554 10.8066 0.120333 10.5358 0.344073 10.4886L2.70512 9.98414C3.58501 9.79611 4.2745 8.91195 4.42113 7.78367L4.81461 4.756C4.84311 4.5329 4.97948 4.35803 5.15343 4.32151C5.37721 4.27456 5.5883 4.46908 5.62492 4.756Z" fill="url(#${gradientId})"/>
    <defs>
      <linearGradient id="${gradientId}" x1="0" y1="9.00009" x2="13.5713" y2="9.00009" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B8FFE3"/>
        <stop offset="1" stop-color="#C081FF"/>
      </linearGradient>
    </defs>
  `;
  
  return svg;
}

export function createThreeAIStarsIcon(width: string = '14px', height: string = '15px', color: string = 'white'): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', '0 0 14 15');
  svg.setAttribute('fill', 'none');
  svg.style.flexShrink = '0';
  
  svg.innerHTML = `
    <path d="M4.75592 3.38213C4.82443 3.1345 5.17557 3.1345 5.24408 3.38213L6.1308 6.58676C6.15326 6.66793 6.21461 6.73263 6.29448 6.75937L9.28271 7.75985C9.51318 7.83701 9.51318 8.16299 9.28271 8.24015L6.29448 9.24063C6.21461 9.26737 6.15326 9.33207 6.1308 9.41324L5.24408 12.6179C5.17557 12.8655 4.82443 12.8655 4.75592 12.6179L3.8692 9.41324C3.84674 9.33207 3.78539 9.26737 3.70552 9.24063L0.71729 8.24015C0.486822 8.16299 0.486823 7.83701 0.71729 7.75985L3.70552 6.75937C3.78539 6.73263 3.84674 6.66793 3.8692 6.58676L4.75592 3.38213Z" fill="${color}"/>
    <path d="M11.1801 2.40097C11.2408 2.04022 11.7592 2.04022 11.8199 2.40097L12.001 3.47727C12.0193 3.58588 12.0914 3.67779 12.1926 3.72136L13.3084 4.20208C13.5698 4.31469 13.5698 4.68531 13.3084 4.79792L12.1926 5.27864C12.0914 5.32221 12.0193 5.41412 12.001 5.52273L11.8199 6.59903C11.7592 6.95978 11.2408 6.95978 11.1801 6.59903L10.999 5.52273C10.9807 5.41412 10.9086 5.32221 10.8074 5.27864L9.69156 4.79792C9.43017 4.68531 9.43017 4.31469 9.69156 4.20208L10.8074 3.72136C10.9086 3.67779 10.9807 3.58588 10.999 3.47727L11.1801 2.40097Z" fill="${color}"/>
    <path d="M10.6241 9.92446C10.6601 9.68162 11.0103 9.68162 11.0463 9.92446L11.2283 11.1525C11.2406 11.2357 11.3006 11.3038 11.3815 11.3266L12.5423 11.6538C12.7496 11.7123 12.7496 12.0062 12.5423 12.0647L11.3815 12.3919C11.3006 12.4147 11.2406 12.4828 11.2283 12.566L11.0463 13.794C11.0103 14.0369 10.6601 14.0369 10.6241 13.794L10.4421 12.566C10.4298 12.4828 10.3698 12.4147 10.2889 12.3919L9.12813 12.0647C8.92077 12.0062 8.92077 11.7123 9.12813 11.6538L10.2889 11.3266C10.3698 11.3038 10.4298 11.2357 10.4421 11.1525L10.6241 9.92446Z" fill="${color}"/>
  `;
  
  return svg;
}

export function createVoiceButtonIcon(): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '36');
  svg.setAttribute('height', '36');
  svg.setAttribute('viewBox', '0 0 36 36');
  svg.setAttribute('fill', 'none');
  svg.style.flexShrink = '0';
  
  // Generate unique IDs for this instance to avoid conflicts
  const bgBlurId = `bgblur_${Math.random().toString(36).substr(2, 9)}`;
  const linearGradientId = `linear_${Math.random().toString(36).substr(2, 9)}`;
  const clipId = `clip_${Math.random().toString(36).substr(2, 9)}`;
  
  svg.innerHTML = `
    <foreignObject x="-28.4231" y="-28.4231" width="92.0679" height="92.0679"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(14.21px);clip-path:url(#${bgBlurId}_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="28.4231">
    <rect x="0.374693" y="0.374693" width="34.4724" height="34.4724" rx="17.2362" fill="#343434" fill-opacity="0.3" style="mix-blend-mode:luminosity"/>
    <rect x="0.374693" y="0.374693" width="34.4724" height="34.4724" rx="17.2362" stroke="url(#${linearGradientId})" stroke-width="0.749385"/>
    <g clip-path="url(#${clipId})">
    <path d="M17.4185 11.9348V20.959M14.4104 9.67876V23.2151M20.4266 9.67876V23.2151M23.4346 12.7824V20.1933M11.4844 12.7824L11.4844 20.1933" stroke="white" stroke-width="1.50404" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </g>
    <defs>
    <clipPath id="${bgBlurId}_clip_path" transform="translate(28.4231 28.4231)"><rect x="0.374693" y="0.374693" width="34.4724" height="34.4724" rx="17.2362"/>
    </clipPath><linearGradient id="${linearGradientId}" x1="-11.3953" y1="3.11412" x2="-7.63119" y2="37.9417" gradientUnits="userSpaceOnUse">
    <stop stop-color="white" stop-opacity="0.4"/>
    <stop offset="0.368352" stop-color="white" stop-opacity="0.01"/>
    <stop offset="0.574372" stop-color="white" stop-opacity="0.01"/>
    <stop offset="1" stop-color="white" stop-opacity="0.1"/>
    </linearGradient>
    <clipPath id="${clipId}">
    <rect width="18.0484" height="21.0565" fill="white" transform="matrix(0 -1 1 0 6.89062 25.4712)"/>
    </clipPath>
    </defs>
  `;
  
  return svg;
}