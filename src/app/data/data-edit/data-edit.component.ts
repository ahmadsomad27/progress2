import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent implements OnInit {
  id: number;
  editMode = false;
  dataForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router) { 
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    // const newData = new Data(
    //   this.dataForm.value['name'],
    //   this.dataForm.value['description'],
    //   this.dataForm.value['imagePath'],
    //   this.dataForm.value['ingredients']);
    if (this.editMode){
      this.dataService.updateData(this.id, this.dataForm.value);
    }else{
      this.dataService.addData(this.dataForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient(){
    (<FormArray>this.dataForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.dataForm.get('ingredients')).removeAt(index);
  }

  private initForm(){
    let dataName = '';
    let dataImagePath = '';
    let dataDescription = '';
    let dataIngredients = new FormArray([]);

    if (this.editMode){
      const data = this.dataService.getData(this.id);
      dataName = data.name;
      dataImagePath = data.imagePath;
      dataDescription = data.description;
      if (data['ingredients']){
        for (let ingredient of data.ingredients){
          dataIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.dataForm = new FormGroup({
      'name': new FormControl(dataName, Validators.required),
      'imagePath': new FormControl(dataImagePath, Validators.required),
      'description': new FormControl(dataDescription, Validators.required),
      'ingredients': dataIngredients
    });
  }
}
