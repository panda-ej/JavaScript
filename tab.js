/* 버튼0을 누르면
- 모든버튼에 붙은 orange 클래스명 제거
- 버튼0에 orange 클래스명 추가
- 모든div에 붙은 show 클래스명 제거
- div0에 show 클래스명 추가 */

// var 버튼 = $('.tab-button');

// 버튼.eq(0).on('click', function(){
//   버튼.removeClass('orange')
//   버튼.eq(0).addClass('orange')
//   버튼.removeClass('show')
//   버튼.eq(0).addClass('show')
// })

// $('.tab-button').eq(1).on('click', function(){
//   $('.tab-button').removeClass('orange')
//   $('.tab-button').eq(1).addClass('orange')
//   $('.tab-content').removeClass('show')
//   $('.tab-content').eq(1).addClass('show')
// })

// $('.tab-button').eq(2).on('click', function(){
//   $('.tab-button').removeClass('orange')
//   $('.tab-button').eq(2).addClass('orange')
//   $('.tab-content').removeClass('show')
//   $('.tab-content').eq(2).addClass('show')
// })

for (let i = 0; i < $('.tab-button').length; i++){
  $('.tab-button').eq(i).on('click', function(){
    $('.tab-button').removeClass('orange')
    $('.tab-button').eq(i).addClass('orange')
    $('.tab-content').removeClass('show')
    $('.tab-content').eq(i).addClass('show')
  })
}