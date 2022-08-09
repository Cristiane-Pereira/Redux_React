export function toogleLesson(module, lesson) {
  //essa funçao vai setar de o modulo ou a lesson esta ativa!
  return {
    type: "TOOGLE_LESSON",
    module,
    lesson,
  };
}
