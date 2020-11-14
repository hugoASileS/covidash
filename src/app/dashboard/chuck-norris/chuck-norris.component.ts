import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../../services/chuck-norris.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.scss'],
})
export class ChuckNorrisComponent implements OnInit {
  categories$;
  chuckFormGroup: FormGroup;
  chuck$;
  showCategory = true;
  resultSearch$;

  constructor(private chuckNorrisService: ChuckNorrisService, private fb: FormBuilder) {
    this.chuckFormGroup = fb.group({
      random: 'random',
      category: '',
      query: '',
    });

    this.chuckFormGroup
      .get('query')
      .valueChanges.pipe(
        map((value) => value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((textToSearch) => {
        this.showCategory = textToSearch === '';
        if (textToSearch !== '') {
          this.chuck$ = null;
          this.resultSearch$ = this.chuckNorrisService.search(textToSearch);
        }
      });

    this.chuckFormGroup.get('category').valueChanges.subscribe((category) => {
      if (category !== '') {
        this.resultSearch$ = null;
        this.chuck$ = this.chuckNorrisService.getRandom(category);
      }
    });
  }

  ngOnInit(): void {
    this.categories$ = this.chuckNorrisService.getCategories();
    this.chuck$ = this.chuckNorrisService.getRandom();
  }

  handleSubmitChuck(): void {
    this.chuck$ = this.chuckNorrisService.getRandom();
  }
}
