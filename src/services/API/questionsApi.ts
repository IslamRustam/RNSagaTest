import axios from '_services/NetworkService';

export class QuestionsAPI {
  static async getQuestions(amount: number, difficulty: string) {
    const result = await axios.get(
      'https://opentdb.com/api.php?amount=' + amount + '&difficulty=' + difficulty + '&type=boolean'
    );

    return result.data;
  }
}