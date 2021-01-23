import './pagination.css';
import 'paginationjs/dist/pagination.css';
import $ from 'jquery';
import 'paginationjs';

$(() => {
  $('#pagination-container').pagination({
    dataSource: [
      { name: 'hello1' },
      { name: 'hello2' },
      { name: 'hello3' },
      { name: 'hello4' },
      { name: 'hello5' },
      { name: 'hello6' },
      { name: 'hello7' },
      { name: 'hello8' },
      { name: 'hello9' },
      { name: 'hello10' },
      { name: 'hello11' },
      { name: 'hello12' },
      { name: 'hello13' },
      { name: 'hello14' },
      { name: 'hello15' },
    ],
    pageSize: 1,
    // callback: (data) => {
    //   let dataHtml = '<ul>';
    //   $.each(data, (index, item) => {
    //     dataHtml += `<li> ${item.name} </li>`;
    //   });
    //   dataHtml += '</ul>';
    //   $('#data-container').html(dataHtml);
    // },
    autoHidePrevious: true,
    autoHideNext: true,
    pageRange: 1,
    showNavigator: true,
    formatNavigator: '<span class="pagination__navigator"><%= currentPage %> – <%= totalPage %> из 100+ вариантов аренды</span>',
    prevText: '<i class="pagination__arrow material-icons">arrow_back</i>',
    nextText: '<i class="pagination__arrow material-icons">arrow_forward</i>',
  });
});
