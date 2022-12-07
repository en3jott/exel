import { ExcelComponent } from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
		<input class="excel__header-input" type="text" value="New table" />
          <div class="excel__header-btns">
            <div class="excel__header-button">
              <i class="material-icons">delete</i>
            </div>
            <div class="excel__header-button">
              <i class="material-icons">exit_to_app</i>
            </div>
          </div>
	`;
  }
}
