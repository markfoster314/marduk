import { Svg } from "@/components/Svg/Svg";

export interface LogoSvgProps {
  size?: number;
  align?: "left" | "center" | "right";
  className?: string;
  animation?: "heartpulse";
}

export const LogoSvg = ({
  size = 128,
  animation,
  className,
  align = "center",
  ...props
}: LogoSvgProps) => {
  return (
    <Svg
      viewBox="0 0 127.5 127.5"
      version="1.0"
      className={className}
      animation={animation}
      size={size}
      align={align}
      responsive={true}
      {...props}
    >
      <defs>
        <clipPath id="b2fcc115ec">
          <path d="M 47 0 L 80 0 L 80 32 L 47 32 Z M 47 0 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="350c25dd90">
          <path
            d="M 63.390625 0 L 79.238281 15.847656 L 63.390625 31.695312 L 47.542969 15.847656 Z M 63.390625 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="c07bfcb47e">
          <path
            d="M 0.335938 0 L 32.367188 0 L 32.367188 31.796875 L 0.335938 31.796875 Z M 0.335938 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="08e79dddce">
          <path
            d="M 16.390625 0 L 32.238281 15.847656 L 16.390625 31.695312 L 0.542969 15.847656 Z M 16.390625 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f70b312baa">
          <rect x="0" width="33" y="0" height="32" />
        </clipPath>
        <clipPath id="0a299427d4">
          <path d="M 95 47 L 127 47 L 127 80 L 95 80 Z M 95 47 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="fc95a6a5db">
          <path
            d="M 110.933594 47.542969 L 126.78125 63.390625 L 110.933594 79.238281 L 95.085938 63.390625 Z M 110.933594 47.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8db5cef213">
          <path
            d="M 0 0.335938 L 31.941406 0.335938 L 31.941406 32.367188 L 0 32.367188 Z M 0 0.335938 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="9eecd37ac0">
          <path
            d="M 15.933594 0.542969 L 31.78125 16.390625 L 15.933594 32.238281 L 0.0859375 16.390625 Z M 15.933594 0.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d8ac4bda25">
          <rect x="0" width="32" y="0" height="33" />
        </clipPath>
        <clipPath id="f7eef69608">
          <path d="M 0 47 L 32 47 L 32 80 L 0 80 Z M 0 47 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="ecf338379b">
          <path
            d="M 15.847656 47.542969 L 31.695312 63.390625 L 15.847656 79.238281 L 0 63.390625 Z M 15.847656 47.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="210efb9ddb">
          <path
            d="M 0 0.335938 L 31.796875 0.335938 L 31.796875 32.367188 L 0 32.367188 Z M 0 0.335938 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="ec09c050b2">
          <path
            d="M 15.847656 0.542969 L 31.695312 16.390625 L 15.847656 32.238281 L 0 16.390625 Z M 15.847656 0.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="d4e88f48d2">
          <rect x="0" width="32" y="0" height="33" />
        </clipPath>
        <clipPath id="f272e29f86">
          <path d="M 47 95 L 80 95 L 80 127 L 47 127 Z M 47 95 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="3549c69e92">
          <path
            d="M 63.390625 95.085938 L 79.238281 110.933594 L 63.390625 126.78125 L 47.542969 110.933594 Z M 63.390625 95.085938 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a1e045be76">
          <path
            d="M 0.335938 0 L 32.367188 0 L 32.367188 31.941406 L 0.335938 31.941406 Z M 0.335938 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="f88ccc047e">
          <path
            d="M 16.390625 0.0859375 L 32.238281 15.933594 L 16.390625 31.78125 L 0.542969 15.933594 Z M 16.390625 0.0859375 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3deaa1d81f">
          <rect x="0" width="33" y="0" height="32" />
        </clipPath>
        <clipPath id="b13103f923">
          <path d="M 47 52 L 80 52 L 80 85 L 47 85 Z M 47 52 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="322ac8ede7">
          <path
            d="M 63.390625 52.824219 L 79.238281 68.671875 L 63.390625 84.519531 L 47.542969 68.671875 Z M 63.390625 52.824219 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="2efdc4696a">
          <path
            d="M 0.335938 0.59375 L 32.367188 0.59375 L 32.367188 32.628906 L 0.335938 32.628906 Z M 0.335938 0.59375 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="cf6de08e02">
          <path
            d="M 16.390625 0.824219 L 32.238281 16.671875 L 16.390625 32.519531 L 0.542969 16.671875 Z M 16.390625 0.824219 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="814849ac4d">
          <rect x="0" width="33" y="0" height="33" />
        </clipPath>
        <clipPath id="eb534bb1ee">
          <path d="M 47 47 L 80 47 L 80 80 L 47 80 Z M 47 47 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="a1754da0ac">
          <path
            d="M 63.390625 47.542969 L 79.238281 63.390625 L 63.390625 79.238281 L 47.542969 63.390625 Z M 63.390625 47.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="eba635421b">
          <path
            d="M 0.335938 0.335938 L 32.367188 0.335938 L 32.367188 32.367188 L 0.335938 32.367188 Z M 0.335938 0.335938 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e4d858210a">
          <path
            d="M 16.390625 0.542969 L 32.238281 16.390625 L 16.390625 32.238281 L 0.542969 16.390625 Z M 16.390625 0.542969 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="5dd1994f8e">
          <rect x="0" width="33" y="0" height="33" />
        </clipPath>
        <clipPath id="26c637e412">
          <path d="M 47 42 L 80 42 L 80 74 L 47 74 Z M 47 42 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="efd1fd5d9d">
          <path
            d="M 63.390625 42.261719 L 79.238281 58.109375 L 63.390625 73.957031 L 47.542969 58.109375 Z M 63.390625 42.261719 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="e0371a7270">
          <path
            d="M 0.335938 0.0742188 L 32.367188 0.0742188 L 32.367188 32 L 0.335938 32 Z M 0.335938 0.0742188 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="8f77133dbd">
          <path
            d="M 16.390625 0.261719 L 32.238281 16.109375 L 16.390625 31.957031 L 0.542969 16.109375 Z M 16.390625 0.261719 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="39d5784e06">
          <rect x="0" width="33" y="0" height="32" />
        </clipPath>
      </defs>
      <g clipPath="url(#b2fcc115ec)">
        <g clipPath="url(#350c25dd90)">
          <g transform="matrix(1, 0, 0, 1, 47, 0.000000000000007293)">
            <g clipPath="url(#f70b312baa)">
              <g clipPath="url(#c07bfcb47e)">
                <g clipPath="url(#08e79dddce)">
                  <path
                    fill="#63b3ed"
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
      <g clipPath="url(#0a299427d4)">
        <g clipPath="url(#fc95a6a5db)">
          <g transform="matrix(1, 0, 0, 1, 95, 47)">
            <g clipPath="url(#d8ac4bda25)">
              <g clipPath="url(#8db5cef213)">
                <g clipPath="url(#9eecd37ac0)">
                  <path
                    fill="#63b3ed"
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
      <g clipPath="url(#f7eef69608)">
        <g clipPath="url(#ecf338379b)">
          <g transform="matrix(1, 0, 0, 1, 0, 47)">
            <g clipPath="url(#d4e88f48d2)">
              <g clipPath="url(#210efb9ddb)">
                <g clipPath="url(#ec09c050b2)">
                  <path
                    fill="#63b3ed"
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
      <g clipPath="url(#f272e29f86)">
        <g clipPath="url(#3549c69e92)">
          <g transform="matrix(1, 0, 0, 1, 47, 95)">
            <g clipPath="url(#3deaa1d81f)">
              <g clipPath="url(#a1e045be76)">
                <g clipPath="url(#f88ccc047e)">
                  <path
                    fill="#63b3ed"
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
      <g clipPath="url(#b13103f923)">
        <g clipPath="url(#322ac8ede7)">
          <g transform="matrix(1, 0, 0, 1, 47, 52)">
            <g clipPath="url(#814849ac4d)">
              <g clipPath="url(#2efdc4696a)">
                <g clipPath="url(#cf6de08e02)">
                  <path
                    fill="#3182ce"
                    d="M 16.390625 0.824219 L 32.238281 16.671875 L 16.390625 32.519531 L 0.542969 16.671875 Z M 16.390625 0.824219 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#eb534bb1ee)">
        <g clipPath="url(#a1754da0ac)">
          <g transform="matrix(1, 0, 0, 1, 47, 47)">
            <g clipPath="url(#5dd1994f8e)">
              <g clipPath="url(#eba635421b)">
                <g clipPath="url(#e4d858210a)">
                  <path
                    fill="#4299e1"
                    d="M 16.390625 0.542969 L 32.238281 16.390625 L 16.390625 32.238281 L 0.542969 16.390625 Z M 16.390625 0.542969 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#26c637e412)">
        <g clipPath="url(#efd1fd5d9d)">
          <g transform="matrix(1, 0, 0, 1, 47, 42)">
            <g clipPath="url(#39d5784e06)">
              <g clipPath="url(#e0371a7270)">
                <g clipPath="url(#8f77133dbd)">
                  <path
                    fill="#63b3ed"
                    d="M 16.390625 0.261719 L 32.238281 16.109375 L 16.390625 31.957031 L 0.542969 16.109375 Z M 16.390625 0.261719 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};
