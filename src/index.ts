const homeWindows = document.querySelector("#homeWindows");
const adminWindows = document.querySelector("#adminWindows");
const loGin = document.querySelector("#loGin");

loGin?.addEventListener("click", () => {
  const input_1 = document.querySelector("#input_1") as HTMLInputElement;
  const input_2 = document.querySelector("#input_2") as HTMLInputElement;

  if (input_1.value === "" && input_2.value === "") {
    if (!homeWindows) {
      return;
    }
    // @ts-ignore
    homeWindows.style.display = "none";
  } else {
    alert("Wrong User Name or Password");
  }

  if (!adminWindows) {
    return;
  }
  adminWindows.classList.remove("d-none");
  // @ts-ignore
  adminWindows.style.display = "d-block";
});

const logOut = document.querySelector("#logOut");

if (logOut) {
  logOut?.addEventListener("click", () => {
    if (homeWindows) {
      homeWindows.classList.remove("d-none");
      // @ts-ignore
      homeWindows.style.display = "block";
    }

    if (adminWindows) {
      // @ts-ignore
      adminWindows.classList.remove = "d-block";
      // @ts-ignore
      adminWindows.style.display = "none";
    }
  });
} else {
}

const tesTs = document.querySelector("#tesTs");
const quesT = document.querySelector("#quesTions");

type testC = {
  id: number;
  name: string;
};

const testRender = () => {
  // @ts-ignore
  axios
    .get("https://cc4f715a12972b8a.mokky.dev/tests")
    .then((res: { data: testC }) => {
      const resulted = res.data;
      if (!tesTs) {
        return;
      }
      resulted.map((item: { id: number; name: string }) => {
        tesTs.innerHTML += `
                  <div class="col-12 col-lg-10">
                <div class="p-3 mx-1 mb-3 rounded-2 color">
              <div class="d-flex justify-content-between gap-2 align-items-center">
                <h4>${item.name}</h4>
                <div class="gap-3"><button class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                <button class="btn btn-primary">Active</button></div>
                </div>
            </div>
            </div>
            `;
      });
    })
    .catch(() => {});
};

testRender();

type questionC = {
  id: number;
  name: string;
  a: string;
  b: string;
  c: string;
  trueAnswear: string;
};

const questionTrender = () => {
  // @ts-ignore
  axios
    .get("https://cc4f715a12972b8a.mokky.dev/questions")
    .then((res: { data: questionC }) => {
      const absolute = res.data;
      if (!quesT) {
        return;
      }
      // @ts-ignore
      absolute.map(
        (item: {
          id: number;
          name: string;
          a: string;
          b: string;
          c: string;
          trueAnswear: string;
        }) => {
          quesT.innerHTML += `
              <div class="col-12 col-lg-10">
            <div class="p-3 mx-3 mb-3 rounded-2 color">
              <div class="d-flex justify-content-around align-items-center">
                <p>${item.name}</p>
                <h6>Questions </h6>
                <p>Answers</p>
                <select class="primary text-white border-0">
                  <option selected>V</option>
                  <option value="1">${item.a}</option>
                  <option value="2">${item.b}</option>
                  <option value="3">${item.c}</option>
                </select>
              </div>
            </div>
          </div>
        `;
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

questionTrender();

const questT = document.querySelector("#questT");
const tests = document.querySelector("#tesTs");
const tests1 = document.querySelector("#tests");

// @ts-ignore
questions?.addEventListener("click", () => {
  if (quesT) {
    quesT.classList.remove("d-none");
    // @ts-ignore
    quesT.style.display = "block";
  }

  if (tests) {
    // @ts-ignore
    tests.classList.remove("d-block");
    // @ts-ignore
    tests.style.display = "none";
  }
});

// @ts-ignore
tests1.addEventListener("click", () => {
  if (tesTs) {
    // @ts-ignore
    tesTs?.style.display = "block";
  }
  if (quesT) {
    // @ts-ignore
    quesT.classList.remove("d-block");
    // @ts-ignore
    quesT.style.display = "none";
  }
});

// @ts-ignore
const myModal = new bootstrap.Modal("#exampleModal", {
  keyboard: false,
});

const add = document.querySelector("#add");
const add1 = document.querySelector("#add1");

add?.addEventListener("click", () => {
  myModal.show();
});
