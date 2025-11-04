import { Svg } from "../Svg/Svg";

export interface LogoSvgProps {
  height?: number;
  width?: number;
  align?: "left" | "center" | "right";
  className?: string;
  animation?: "heartpulse";
}

export const LogoSvg = ({
  height = 127.5,
  width = 127.5,
  animation,
  className,
  align = "center",
  ...props
}: LogoSvgProps) => {
  return (
    <Svg
      zoomAndPan="magnify"
      viewBox="0 0 127.5 127.5"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className={className}
      animation={animation}
      height={height}
      width={width}
      align={align}
      {...props}
    >
      <defs>
        <clipPath id="3ece4e3f7d">
          <path
            d="M 0 0 L 127 0 L 127 127 L 0 127 Z M 0 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="7a2a53a58c">
          <path
            d="M 63.390625 0 L 126.78125 63.390625 L 63.390625 126.78125 L 0 63.390625 Z M 63.390625 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="af4ef14315">
          <path
            d="M 0 0 L 126.941406 0 L 126.941406 126.941406 L 0 126.941406 Z M 0 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e81d19a970">
          <path
            d="M 63.390625 0 L 126.78125 63.390625 L 63.390625 126.78125 L 0 63.390625 Z M 63.390625 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="68549b91ea">
          <rect x="0" width="127" y="0" height="127" />
        </clipPath>
        <clipPath id="b983137332">
          <path
            d="M 47 0 L 80 0 L 80 32 L 47 32 Z M 47 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="11f6b41be3">
          <path
            d="M 63.390625 0 L 79.238281 15.847656 L 63.390625 31.695312 L 47.542969 15.847656 Z M 63.390625 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="822c75f5ba">
          <path
            d="M 0.335938 0 L 32.367188 0 L 32.367188 31.796875 L 0.335938 31.796875 Z M 0.335938 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ad26d154f3">
          <path
            d="M 16.390625 0 L 32.238281 15.847656 L 16.390625 31.695312 L 0.542969 15.847656 Z M 16.390625 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9beefc4c4c">
          <rect x="0" width="33" y="0" height="32" />
        </clipPath>
        <clipPath id="65f2ee7998">
          <path
            d="M 95 47 L 127 47 L 127 80 L 95 80 Z M 95 47 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="66c570b23d">
          <path
            d="M 110.933594 47.542969 L 126.78125 63.390625 L 110.933594 79.238281 L 95.085938 63.390625 Z M 110.933594 47.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f2572b070b">
          <path
            d="M 0 0.335938 L 31.941406 0.335938 L 31.941406 32.367188 L 0 32.367188 Z M 0 0.335938 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="005cb42444">
          <path
            d="M 15.933594 0.542969 L 31.78125 16.390625 L 15.933594 32.238281 L 0.0859375 16.390625 Z M 15.933594 0.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3ca2ea1fe0">
          <rect x="0" width="32" y="0" height="33" />
        </clipPath>
        <clipPath id="267d8a51ff">
          <path
            d="M 71 23 L 104 23 L 104 56 L 71 56 Z M 71 23 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="7112b61bca">
          <path
            d="M 87.164062 23.773438 L 103.011719 39.621094 L 87.164062 55.46875 L 71.316406 39.621094 Z M 87.164062 23.773438 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="53e40659cb">
          <path
            d="M 0.242188 0.667969 L 32.035156 0.667969 L 32.035156 32.703125 L 0.242188 32.703125 Z M 0.242188 0.667969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="b4dca47386">
          <path
            d="M 16.164062 0.773438 L 32.011719 16.621094 L 16.164062 32.46875 L 0.316406 16.621094 Z M 16.164062 0.773438 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="399fc54396">
          <rect x="0" width="33" y="0" height="33" />
        </clipPath>
        <clipPath id="4fa114d213">
          <path
            d="M 23 23 L 56 23 L 56 56 L 23 56 Z M 23 23 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="66ce52b7f5">
          <path
            d="M 39.621094 23.773438 L 55.46875 39.621094 L 39.621094 55.46875 L 23.773438 39.621094 Z M 39.621094 23.773438 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="33440b3d11">
          <path
            d="M 0.667969 0.667969 L 32.703125 0.667969 L 32.703125 32.703125 L 0.667969 32.703125 Z M 0.667969 0.667969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="62c9967f3a">
          <path
            d="M 16.621094 0.773438 L 32.46875 16.621094 L 16.621094 32.46875 L 0.773438 16.621094 Z M 16.621094 0.773438 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c1a754eb89">
          <rect x="0" width="33" y="0" height="33" />
        </clipPath>
        <clipPath id="f16fb488c5">
          <path
            d="M 0 47 L 32 47 L 32 80 L 0 80 Z M 0 47 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1acc45c0a7">
          <path
            d="M 15.847656 47.542969 L 31.695312 63.390625 L 15.847656 79.238281 L 0 63.390625 Z M 15.847656 47.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6ae7a97277">
          <path
            d="M 0 0.335938 L 31.796875 0.335938 L 31.796875 32.367188 L 0 32.367188 Z M 0 0.335938 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6c33486c94">
          <path
            d="M 15.847656 0.542969 L 31.695312 16.390625 L 15.847656 32.238281 L 0 16.390625 Z M 15.847656 0.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0e0e27da73">
          <rect x="0" width="32" y="0" height="33" />
        </clipPath>
        <clipPath id="7e974e7bea">
          <path
            d="M 23 71 L 56 71 L 56 104 L 23 104 Z M 23 71 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="64e49f9939">
          <path
            d="M 39.621094 71.316406 L 55.46875 87.164062 L 39.621094 103.011719 L 23.773438 87.164062 Z M 39.621094 71.316406 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1044db3c5c">
          <path
            d="M 0.667969 0.242188 L 32.703125 0.242188 L 32.703125 32.035156 L 0.667969 32.035156 Z M 0.667969 0.242188 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bf22f650c5">
          <path
            d="M 16.621094 0.316406 L 32.46875 16.164062 L 16.621094 32.011719 L 0.773438 16.164062 Z M 16.621094 0.316406 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c4eabb8b42">
          <rect x="0" width="33" y="0" height="33" />
        </clipPath>
        <clipPath id="5130161cdd">
          <path
            d="M 47 95 L 80 95 L 80 127 L 47 127 Z M 47 95 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="18a39e40c8">
          <path
            d="M 63.390625 95.085938 L 79.238281 110.933594 L 63.390625 126.78125 L 47.542969 110.933594 Z M 63.390625 95.085938 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="350ac38874">
          <path
            d="M 0.335938 0 L 32.367188 0 L 32.367188 31.941406 L 0.335938 31.941406 Z M 0.335938 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="dc2be1d5c9">
          <path
            d="M 16.390625 0.0859375 L 32.238281 15.933594 L 16.390625 31.78125 L 0.542969 15.933594 Z M 16.390625 0.0859375 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5f3741004a">
          <rect x="0" width="33" y="0" height="32" />
        </clipPath>
        <clipPath id="9b8f850127">
          <path
            d="M 71 71 L 104 71 L 104 104 L 71 104 Z M 71 71 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="7e56212b45">
          <path
            d="M 87.164062 71.316406 L 103.011719 87.164062 L 87.164062 103.011719 L 71.316406 87.164062 Z M 87.164062 71.316406 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f006df5e16">
          <path
            d="M 0.242188 0.242188 L 32.035156 0.242188 L 32.035156 32.035156 L 0.242188 32.035156 Z M 0.242188 0.242188 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="0a2ee7bcf5">
          <path
            d="M 16.164062 0.316406 L 32.011719 16.164062 L 16.164062 32.011719 L 0.316406 16.164062 Z M 16.164062 0.316406 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4838d7ffd8">
          <rect x="0" width="33" y="0" height="33" />
        </clipPath>
        <clipPath id="6e67337e9d">
          <path
            d="M 52 57 L 75 57 L 75 80 L 52 80 Z M 52 57 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2b986e4bec">
          <path
            d="M 63.390625 52.824219 L 79.238281 68.671875 L 63.390625 84.519531 L 47.542969 68.671875 Z M 63.390625 52.824219 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="550b61de6c">
          <path
            d="M 71.316406 60.75 C 75.691406 65.125 75.691406 72.222656 71.316406 76.597656 C 66.9375 80.972656 59.84375 80.972656 55.46875 76.597656 C 51.089844 72.222656 51.089844 65.125 55.46875 60.75 C 59.84375 56.375 66.9375 56.375 71.316406 60.75 Z M 71.316406 60.75 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9f76582a8c">
          <path d="M 0 0 L 23 0 L 23 23 L 0 23 Z M 0 0 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="3f60f21842">
          <path
            d="M 11.390625 -4.175781 L 27.238281 11.671875 L 11.390625 27.519531 L -4.457031 11.671875 Z M 11.390625 -4.175781 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6d59342c6a">
          <path
            d="M 19.316406 3.75 C 23.691406 8.125 23.691406 15.222656 19.316406 19.597656 C 14.9375 23.972656 7.84375 23.972656 3.46875 19.597656 C -0.910156 15.222656 -0.910156 8.125 3.46875 3.75 C 7.84375 -0.625 14.9375 -0.625 19.316406 3.75 Z M 19.316406 3.75 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="225a32e5fa">
          <rect x="0" width="23" y="0" height="23" />
        </clipPath>
        <clipPath id="5d4fc24118">
          <path
            d="M 52 46 L 75 46 L 75 70 L 52 70 Z M 52 46 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="183ccabb73">
          <path
            d="M 63.390625 42.261719 L 79.238281 58.109375 L 63.390625 73.957031 L 47.542969 58.109375 Z M 63.390625 42.261719 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="bc14d029ed">
          <path
            d="M 71.316406 50.183594 C 75.691406 54.5625 75.691406 61.65625 71.316406 66.03125 C 66.9375 70.410156 59.84375 70.410156 55.46875 66.03125 C 51.089844 61.65625 51.089844 54.5625 55.46875 50.183594 C 59.84375 45.808594 66.9375 45.808594 71.316406 50.183594 Z M 71.316406 50.183594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e87840141e">
          <path d="M 0 0 L 23 0 L 23 24 L 0 24 Z M 0 0 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="5353406304">
          <path
            d="M 11.390625 -3.738281 L 27.238281 12.109375 L 11.390625 27.957031 L -4.457031 12.109375 Z M 11.390625 -3.738281 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9278cbee65">
          <path
            d="M 19.316406 4.183594 C 23.691406 8.5625 23.691406 15.65625 19.316406 20.03125 C 14.9375 24.410156 7.84375 24.410156 3.46875 20.03125 C -0.910156 15.65625 -0.910156 8.5625 3.46875 4.183594 C 7.84375 -0.191406 14.9375 -0.191406 19.316406 4.183594 Z M 19.316406 4.183594 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="fb439b496b">
          <rect x="0" width="23" y="0" height="24" />
        </clipPath>
        <clipPath id="5b7ecd145f">
          <path
            d="M 52 9 L 75 9 L 75 33 L 52 33 Z M 52 9 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="aa1fd3b07d">
          <path
            d="M 63.390625 5.28125 L 79.238281 21.128906 L 63.390625 36.976562 L 47.542969 21.128906 Z M 63.390625 5.28125 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="497c5aaf82">
          <path
            d="M 71.316406 13.207031 C 75.691406 17.582031 75.691406 24.679688 71.316406 29.054688 C 66.9375 33.429688 59.84375 33.429688 55.46875 29.054688 C 51.089844 24.679688 51.089844 17.582031 55.46875 13.207031 C 59.84375 8.832031 66.9375 8.832031 71.316406 13.207031 Z M 71.316406 13.207031 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e59ea97996">
          <path d="M 0 0 L 23 0 L 23 24 L 0 24 Z M 0 0 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="8178caca00">
          <path
            d="M 11.390625 -3.71875 L 27.238281 12.128906 L 11.390625 27.976562 L -4.457031 12.128906 Z M 11.390625 -3.71875 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="757c07d2f3">
          <path
            d="M 19.316406 4.207031 C 23.691406 8.582031 23.691406 15.679688 19.316406 20.054688 C 14.9375 24.429688 7.84375 24.429688 3.46875 20.054688 C -0.910156 15.679688 -0.910156 8.582031 3.46875 4.207031 C 7.84375 -0.167969 14.9375 -0.167969 19.316406 4.207031 Z M 19.316406 4.207031 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4a5524ebee">
          <rect x="0" width="23" y="0" height="24" />
        </clipPath>
        <clipPath id="40f9ec59d4">
          <path
            d="M 52 94 L 75 94 L 75 117 L 52 117 Z M 52 94 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="186fcf1d0d">
          <path
            d="M 63.390625 89.804688 L 79.238281 105.652344 L 63.390625 121.5 L 47.542969 105.652344 Z M 63.390625 89.804688 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="def452f85f">
          <path
            d="M 71.316406 97.726562 C 75.691406 102.105469 75.691406 109.199219 71.316406 113.574219 C 66.9375 117.953125 59.84375 117.953125 55.46875 113.574219 C 51.089844 109.199219 51.089844 102.105469 55.46875 97.726562 C 59.84375 93.351562 66.9375 93.351562 71.316406 97.726562 Z M 71.316406 97.726562 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="247c77a4ee">
          <path d="M 0 0 L 23 0 L 23 23 L 0 23 Z M 0 0 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="2431740831">
          <path
            d="M 11.390625 -4.195312 L 27.238281 11.652344 L 11.390625 27.5 L -4.457031 11.652344 Z M 11.390625 -4.195312 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a4a67df26e">
          <path
            d="M 19.316406 3.726562 C 23.691406 8.105469 23.691406 15.199219 19.316406 19.574219 C 14.9375 23.953125 7.84375 23.953125 3.46875 19.574219 C -0.910156 15.199219 -0.910156 8.105469 3.46875 3.726562 C 7.84375 -0.648438 14.9375 -0.648438 19.316406 3.726562 Z M 19.316406 3.726562 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="08c988fa42">
          <rect x="0" width="23" y="0" height="23" />
        </clipPath>
      </defs>
      <g clipPath="url(#3ece4e3f7d)">
        <g clipPath="url(#7a2a53a58c)">
          <g transform="matrix(1, 0, 0, 1, 0, 0.000000000000007293)">
            <g clipPath="url(#68549b91ea)">
              <g clipPath="url(#af4ef14315)">
                <g clipPath="url(#e81d19a970)">
                  <path
                    fill="#63b3ed"
                    d="M 63.390625 0 L 126.78125 63.390625 L 63.390625 126.78125 L 0 63.390625 Z M 63.390625 0 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#b983137332)">
        <g clipPath="url(#11f6b41be3)">
          <g transform="matrix(1, 0, 0, 1, 47, 0.000000000000007293)">
            <g clipPath="url(#9beefc4c4c)">
              <g clipPath="url(#822c75f5ba)">
                <g clipPath="url(#ad26d154f3)">
                  <path
                    fill="#66c5ca"
                    d="M 16.390625 0 L 32.238281 15.847656 L 16.390625 31.695312 L 0.542969 15.847656 Z M 16.390625 0 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#65f2ee7998)">
        <g clipPath="url(#66c570b23d)">
          <g transform="matrix(1, 0, 0, 1, 95, 47)">
            <g clipPath="url(#3ca2ea1fe0)">
              <g clipPath="url(#f2572b070b)">
                <g clipPath="url(#005cb42444)">
                  <path
                    fill="#66c5ca"
                    d="M 15.933594 0.542969 L 31.78125 16.390625 L 15.933594 32.238281 L 0.0859375 16.390625 Z M 15.933594 0.542969 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#267d8a51ff)">
        <g clipPath="url(#7112b61bca)">
          <g transform="matrix(1, 0, 0, 1, 71, 23)">
            <g clipPath="url(#399fc54396)">
              <g clipPath="url(#53e40659cb)">
                <g clipPath="url(#b4dca47386)">
                  <path
                    fill="#66c5ca"
                    d="M 16.164062 0.773438 L 32.011719 16.621094 L 16.164062 32.46875 L 0.316406 16.621094 Z M 16.164062 0.773438 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#4fa114d213)">
        <g clipPath="url(#66ce52b7f5)">
          <g transform="matrix(1, 0, 0, 1, 23, 23)">
            <g clipPath="url(#c1a754eb89)">
              <g clipPath="url(#33440b3d11)">
                <g clipPath="url(#62c9967f3a)">
                  <path
                    fill="#66c5ca"
                    d="M 16.621094 0.773438 L 32.46875 16.621094 L 16.621094 32.46875 L 0.773438 16.621094 Z M 16.621094 0.773438 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#f16fb488c5)">
        <g clipPath="url(#1acc45c0a7)">
          <g transform="matrix(1, 0, 0, 1, 0, 47)">
            <g clipPath="url(#0e0e27da73)">
              <g clipPath="url(#6ae7a97277)">
                <g clipPath="url(#6c33486c94)">
                  <path
                    fill="#66c5ca"
                    d="M 15.847656 0.542969 L 31.695312 16.390625 L 15.847656 32.238281 L 0 16.390625 Z M 15.847656 0.542969 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#7e974e7bea)">
        <g clipPath="url(#64e49f9939)">
          <g transform="matrix(1, 0, 0, 1, 23, 71)">
            <g clipPath="url(#c4eabb8b42)">
              <g clipPath="url(#1044db3c5c)">
                <g clipPath="url(#bf22f650c5)">
                  <path
                    fill="#66c5ca"
                    d="M 16.621094 0.316406 L 32.46875 16.164062 L 16.621094 32.011719 L 0.773438 16.164062 Z M 16.621094 0.316406 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#5130161cdd)">
        <g clipPath="url(#18a39e40c8)">
          <g transform="matrix(1, 0, 0, 1, 47, 95)">
            <g clipPath="url(#5f3741004a)">
              <g clipPath="url(#350ac38874)">
                <g clipPath="url(#dc2be1d5c9)">
                  <path
                    fill="#66c5ca"
                    d="M 16.390625 0.0859375 L 32.238281 15.933594 L 16.390625 31.78125 L 0.542969 15.933594 Z M 16.390625 0.0859375 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#9b8f850127)">
        <g clipPath="url(#7e56212b45)">
          <g transform="matrix(1, 0, 0, 1, 71, 71)">
            <g clipPath="url(#4838d7ffd8)">
              <g clipPath="url(#f006df5e16)">
                <g clipPath="url(#0a2ee7bcf5)">
                  <path
                    fill="#66c5ca"
                    d="M 16.164062 0.316406 L 32.011719 16.164062 L 16.164062 32.011719 L 0.316406 16.164062 Z M 16.164062 0.316406 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#6e67337e9d)">
        <g clipPath="url(#2b986e4bec)">
          <g clipPath="url(#550b61de6c)">
            <g transform="matrix(1, 0, 0, 1, 52, 57)">
              <g clipPath="url(#225a32e5fa)">
                <g clipPath="url(#9f76582a8c)">
                  <g clipPath="url(#3f60f21842)">
                    <g clipPath="url(#6d59342c6a)">
                      <path
                        fill="#66c5ca"
                        d="M 11.390625 -4.175781 L 27.238281 11.671875 L 11.390625 27.519531 L -4.457031 11.671875 Z M 11.390625 -4.175781 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#5d4fc24118)">
        <g clipPath="url(#183ccabb73)">
          <g clipPath="url(#bc14d029ed)">
            <g transform="matrix(1, 0, 0, 1, 52, 46)">
              <g clipPath="url(#fb439b496b)">
                <g clipPath="url(#e87840141e)">
                  <g clipPath="url(#5353406304)">
                    <g clipPath="url(#9278cbee65)">
                      <path
                        fill="#66c5ca"
                        d="M 11.390625 -3.738281 L 27.238281 12.109375 L 11.390625 27.957031 L -4.457031 12.109375 Z M 11.390625 -3.738281 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#5b7ecd145f)">
        <g clipPath="url(#aa1fd3b07d)">
          <g clipPath="url(#497c5aaf82)">
            <g transform="matrix(1, 0, 0, 1, 52, 9)">
              <g clipPath="url(#4a5524ebee)">
                <g clipPath="url(#e59ea97996)">
                  <g clipPath="url(#8178caca00)">
                    <g clipPath="url(#757c07d2f3)">
                      <path
                        fill="#66c5ca"
                        d="M 11.390625 -3.71875 L 27.238281 12.128906 L 11.390625 27.976562 L -4.457031 12.128906 Z M 11.390625 -3.71875 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#40f9ec59d4)">
        <g clipPath="url(#186fcf1d0d)">
          <g clipPath="url(#def452f85f)">
            <g transform="matrix(1, 0, 0, 1, 52, 94)">
              <g clipPath="url(#08c988fa42)">
                <g clipPath="url(#247c77a4ee)">
                  <g clipPath="url(#2431740831)">
                    <g clipPath="url(#a4a67df26e)">
                      <path
                        fill="#66c5ca"
                        d="M 11.390625 -4.195312 L 27.238281 11.652344 L 11.390625 27.5 L -4.457031 11.652344 Z M 11.390625 -4.195312 "
                        fillOpacity="1"
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};
