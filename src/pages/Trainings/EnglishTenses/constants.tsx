import { ITenses } from "./types";

export const TENSES: ITenses[] = [
  {
    title: "Past Simple",
    description:
      "Время Past Simple используется для обозначения действия, которое произошло в определенное время в прошлом и время совершения которого уже истекло.",
    keyWords: (
      <>
        <span>yesterday, ago, 2 weeks ago, last week, a long time ago</span>
      </>
    ),
    affirmation: (
      <>
        noun verb <span>-ed / 2 form</span>
      </>
    ),
    negation: (
      <>
        noun <span>did not</span> verb
      </>
    ),
    question: (
      <>
        <span>did</span> noun verb
      </>
    ),
  },
  {
    title: "Past Continuous",
    description:
      "Время Past Continuous указывает на процесс, длившийся в определенный момент или период в прошлом. В отличие от времени Past Simple, этот момент в прошлом должен быть назван прямо (например, yesterday at 5 o'clock, when you called, when rain started) или быть очевидным из контекста.",
    keyWords: (
      <>
        <span>while, when, at 5 o’clock yesterday</span>
      </>
    ),
    affirmation: (
      <>
        noun <span>was</span>, <u>were</u> (you, we, they) verb{" "}
        <span>-ing</span>
      </>
    ),
    negation: (
      <>
        noun <span>was</span>, <u>were</u> (you, we, they) <span>not</span> verb{" "}
        <span>-ing</span>
      </>
    ),
    question: (
      <>
        <span>was</span>, <u>were</u> (you, we, they) noun verb{" "}
        <span>-ing</span>
      </>
    ),
  },
  {
    title: "Past Perfect",
    description:
      "Время Past Perfect обозначает действие, которое завершилось до определенного момента в прошлом.",
    keyWords: (
      <>
        <span>
          by the time, before, after, when (in the meanings "by the time;
          after"), before last week, by two o'clock yesterday
        </span>
      </>
    ),
    affirmation: (
      <>
        noun <span>had</span> verb <span>-ed / 3 form</span>
      </>
    ),
    negation: (
      <>
        noun <span>had not</span> verb <span>-ed / 3 form</span>
      </>
    ),
    question: (
      <>
        <span>had</span> noun verb <span>-ed / 3 form</span>
      </>
    ),
  },
  {
    title: "Past Perfect Continuous",
    description:
      "Время Past Perfect Continuous указывает на действие, которое началось в прошлом, продолжалось в течение некоторого времени и либо закончилось непосредственно перед неким моментом в прошлом или все еще не закончилось к некоему моменту в прошлом.",
    keyWords: (
      <>
        <span>for, since, how long, before, after</span>
      </>
    ),
    affirmation: (
      <>
        noun <span>had been</span> verb <span>-ing</span>
      </>
    ),
    negation: (
      <>
        noun <span>had not been</span> verb <span>-ing</span>
      </>
    ),
    question: (
      <>
        <span>had</span> noun <span>been</span> verb <span>-ing</span>
      </>
    ),
  },
  {
    title: "Present Simple",
    description:
      "Время Present Simple обозначает действие в настоящем в широком смысле слова. Оно употребляется для обозначения обычных, регулярно повторяющихся или постоянных действий, например, когда мы говорим о чьих-либо привычках, режиме дня, расписании и т. д., т. е. Present Simple обозначает действия, которые происходят в настоящее время, но не привязаны именно к моменту речи.",
    keyWords: (
      <>
        <span>every day, usually, always, sometimes, rarely</span>
      </>
    ),
    affirmation: (
      <>
        noun verb <u>-s, -es</u> (he, she, it)
      </>
    ),
    negation: (
      <>
        noun <span>do</span>, <u>does</u> (he, she, it) <span>not</span> verb
      </>
    ),
    question: (
      <>
        <span>do</span>, <u>does</u> (he, she, it) noun verb
      </>
    ),
  },
  {
    title: "Present Continuous",
    description:
      "Время Present Continuous обычно указывает на процесс, длящийся непосредственно в момент речи.",
    keyWords: (
      <>
        <span>
          now, at the moment, currently, this month, this year, tomorrow
        </span>
      </>
    ),
    affirmation: (
      <>
        noun [am, is, are] verb <span>-ing</span>
      </>
    ),
    negation: (
      <>
        noun [am, is, are] <span>not</span> verb <span>-ing</span>
      </>
    ),
    question: (
      <>
        [am, is, are] noun verb <span>-ing</span>
      </>
    ),
  },
  {
    title: "Present Perfect",
    description:
      "Время Present Perfect обозначает действие, которое завершилось к настоящему моменту или завершено в период настоящего времени.",
    keyWords: (
      <>
        <span>
          just, already, yet, ever, never, once, twice, several times, always,
          by now, up to now; so far, before, for an hour, for a week, for a long
          time, for five years, for years, in years, since, lately, recently
        </span>
      </>
    ),
    affirmation: (
      <>
        noun <span>have</span>, <u>has</u> (he, she, it) verb{" "}
        <span>-ed / 3 form</span>
      </>
    ),
    negation: (
      <>
        noun <span>have</span>, <u>has</u> (he, she, it) <span>not</span> verb{" "}
        <span>-ed / 3 form</span>
      </>
    ),
    question: (
      <>
        <span>have</span>, <u>has</u> (he, she, it) noun verb{" "}
        <span>-ed / 3 form</span>
      </>
    ),
  },
  {
    title: "Present Perfect Continuous",
    description:
      "Время Present Perfect Continuous указывает на действие, которое началось в прошлом, продолжалось в течение некоторого времени и либо закончилось непосредственно перед разговором или все еще продолжается в момент разговора.",
    keyWords: (
      <>
        <span>
          for an hour, for a week, for a long time, for five years, for years,
          in years, all day, all morning, since, how long
        </span>
      </>
    ),
    affirmation: (
      <>
        noun <span>have been</span>, <u>has been</u> (he, she, it) verb{" "}
        <span>-ing</span>
      </>
    ),
    negation: (
      <>
        noun <span>have been</span>, <u>has been</u> (he, she, it){" "}
        <span>not</span> verb <span>-ing</span>
      </>
    ),
    question: (
      <>
        <span>have</span>, <u>has been</u> (he, she, it) noun <span>been</span>{" "}
        verb <span>-ing</span>
      </>
    ),
  },
  {
    title: "Future Simple",
    description:
      "Время Future Simple ссылается на действие, которое совершится в неопределенном или отдаленном будущем.",
    keyWords: (
      <>
        <span>tomorrow, next week, soon</span>
      </>
    ),
    affirmation: (
      <>
        noun <span>will</span> verb
      </>
    ),
    negation: (
      <>
        noun <span>will not</span> verb
      </>
    ),
    question: (
      <>
        <span>will</span> noun verb
      </>
    ),
  },
  {
    title: "Future Continuous",
    description:
      "Время Future Continuous указывает на процесс, который будет длиться в определенный момент в будущем. В отличие от времени Future Simple, этот момент в будущем должен быть назван прямо (tomorrow at 4 o'clock, when we meet) или быть очевидным из контекста.",
    keyWords: (
      <>
        <span>at 3 tomorrow, at this time tomorrow</span>
      </>
    ),
    affirmation: (
      <>
        noun <span>will be</span> verb <span>-ing</span>
      </>
    ),
    negation: (
      <>
        noun <span>will not be</span> verb <span>-ing</span>
      </>
    ),
    question: (
      <>
        <span>will</span> noun <span>be</span> verb <span>-ing</span>
      </>
    ),
  },
  {
    title: "Future Perfect",
    description:
      "Время Future Perfect используется довольно редко, оно обозначает действие, которое закончится до определенного момента или начала другого действия в будущем или будет продолжать длиться после него.",
    keyWords: (
      <>
        <span>
          by the end of this year, by this time tomorrow, in two years time, in
          July next year, in another five months
        </span>
      </>
    ),
    affirmation: (
      <>
        noun <span>will have</span> verb <span>-ed / 3 form</span>
      </>
    ),
    negation: (
      <>
        noun <span>will not have</span> verb <span>-ed / 3 form</span>
      </>
    ),
    question: (
      <>
        <span>will</span> noun <span>have</span> verb <span>-ed / 3 form</span>
      </>
    ),
  },
  {
    title: "Future Perfect Continuous",
    description:
      "Время Future Perfect Continuous указывает на действие, которое началось и продолжалось в течение некоторого времени до определенного момента в будущем. Это время используется очень редко, а в устной речи – практически никогда.",
    keyWords: (
      <>
        <span>for, by the time</span>
      </>
    ),
    affirmation: (
      <>
        noun <span>will have been</span> verb <span>-ing</span>
      </>
    ),
    negation: (
      <>
        noun <span>will not have been</span> verb <span>-ing</span>
      </>
    ),
    question: (
      <>
        <span>will</span> noun <span>have been</span> verb <span>-ing</span>
      </>
    ),
  },
];
