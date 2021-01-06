import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; //parcel 2

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a naice recipe and bookmark it :) ';
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(bookmarks => previewView.render(bookmarks, false))
      .join('');
  }
}

export default new BookmarksView();
