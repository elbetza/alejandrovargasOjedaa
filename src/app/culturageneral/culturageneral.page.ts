import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-culturageneral',
  templateUrl: './culturageneral.page.html',
  styleUrls: ['./culturageneral.page.scss'],
})
export class CulturageneralPage implements OnInit {

  question: string = '';
  options: string[] = [];

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.getTriviaQuestion();
  }

  async getTriviaQuestion() {
    try {
      const { data } = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple');
      const { question, incorrect_answers, correct_answer } = data.results[0];
      this.question = question;
      this.options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);
    } catch (error) {
      console.error('Error al obtener la pregunta:', error);
    }
  }

  async checkAnswer(answer: string) {
    const message = (answer === this.options[3]) ? '¡Correcto!' : 'Incorrecto. Inténtalo de nuevo.';
    const alert = await this.alertController.create({
      header: 'Respuesta',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    this.getTriviaQuestion();
  }
}
