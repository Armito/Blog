window.onload = function () {
  // 添加导航按钮
  const div = document.createElement('div')
  div.innerHTML = `使用指导`
  div.className = 'guide_button'
  document.querySelector('.sidebar').insertAdjacentElement('afterbegin', div)

  div.addEventListener('click', function () {
    // Start the introduction
    const driver = new Driver({
      allowClose: false
    });

    // Define the steps for introduction
    driver.defineSteps([
      {
        element: '.sidebar > .sidebar-links',
        popover: {
          title: 'Step 1',
          description: '点击开始学习',
          position: 'right'
        }
      },
      {
        element: '.can-hide',
        popover: {
          title: 'Step 2',
          description: '点击切换章节',
          position: 'bottom'
        }
      },
      {
        element: '.search-box input',
        popover: {
          title: 'Step 3',
          description: '点击搜索文章',
          position: 'bottom'
        }
      },
      {
        element: '.navbar .site-name',
        popover: {
          title: 'Step 4',
          description: '点击回到首页',
          position: 'right'
        }
      },
    ]);
    driver.start();
  })
}