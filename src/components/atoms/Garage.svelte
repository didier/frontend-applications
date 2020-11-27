<script>
  const shade = 'var(--gray-300)'
  const bright = 'var(--gray-100)'
  const window = 'var(--blueGray-700)'

  const size = '30vh'
</script>

<style lang="scss">
  .garage {
    height: 100%;
    max-height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
  }
</style>

<div class="garage">
  <svg
    width={size}
    height={size}
    viewBox="0 0 143 150"
    fill="none"
    preserveAspectRatio
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M77.692 7.41501L88.073 0.494019L142.286 13.8063V149.291H85.87L61.595 125.016L77.692 7.41501Z"
      fill={shade}
    />
    <path
      d="M88.0726 0.494263H0.40918V149.291H88.0726V0.494263Z"
      fill={bright}
    />
    <path d="M77.1149 112.957H34.4365V149.291H77.1149V112.957Z" fill={shade} />
    <path
      d="M17.1349 123.338V117.571H10.2139V123.338H16.5579H17.1349Z"
      fill={window}
    />
    <path
      d="M16.5579 127.952H10.2139V133.72H17.1349V127.952H16.5579Z"
      fill={window}
    />
    <path d="M28.6693 117.571H21.7485V123.338H28.6693V117.571Z" fill={window} />
    <path d="M28.6693 127.952H21.7485V133.72H28.6693V127.952Z" fill={window} />
    <path
      d="M112.872 40.289V34.522H105.951V40.289H112.296H112.872Z"
      fill={window}
    />
    <path
      d="M112.296 44.903H105.951V50.67H112.872V44.903H112.296Z"
      fill={window}
    />
    <path d="M124.407 34.5215H117.486V40.2889H124.407V34.5215Z" fill={window} />
    <path d="M124.407 44.9027H117.486V50.67H124.407V44.9027Z" fill={window} />
    <path
      d="M112.872 104.883V99.116H105.951V104.883H112.296H112.872Z"
      fill={window}
    />
    <path
      d="M112.296 109.497H105.951V115.264H112.872V109.497H112.296Z"
      fill={window}
    />
    <path d="M124.407 99.1157H117.486V104.883H124.407V99.1157Z" fill={window} />
    <path d="M124.407 109.497H117.486V115.264H124.407V109.497Z" fill={window} />
    <path d="M77.1149 7.99182H10.2139V21.8334H77.1149V7.99182Z" fill={window} />
    <path d="M77.1149 35.675H10.2139V49.5166H77.1149V35.675Z" fill={window} />
    <path d="M77.1149 63.3582H10.2139V77.1998H77.1149V63.3582Z" fill={window} />
    <path d="M77.1149 91.0414H10.2139V104.883H77.1149V91.0414Z" fill={window} />
    <path
      d="M125.633 74.8925C125.633 81.9712 120.883 87.2341 115.56 87.2341C110.237 87.2341 105.487 81.9712 105.487 74.8925C105.487 67.8138 110.237 62.5509 115.56 62.5509C120.883 62.5509 125.633 67.8138 125.633 74.8925Z"
      fill="#2D9CDB"
      stroke="white"
      stroke-width="3"
    />
    <path
      d="M112.226 80.3925H114.378V77.0914H116.188C118.53 77.0914 119.892 75.6944 119.892 73.661C119.892 71.6375 118.555 70.2107 116.243 70.2107H112.226V80.3925ZM114.378 75.3662V71.9706H115.83C117.073 71.9706 117.675 72.6468 117.675 73.661C117.675 74.6702 117.073 75.3662 115.84 75.3662H114.378Z"
      fill={bright}
    />
  </svg>
</div>
