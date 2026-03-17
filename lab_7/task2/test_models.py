from models import Sorcerer, Curse, Human


def run_tests():

    gojo = Sorcerer("Gojo Satoru", 1000, "Unlimited Void", "Special Grade")
    yuta = Sorcerer("Yuta Okkotsu", 950, "Copy Technique", "Special Grade")

    sukuna = Curse("Ryomen Sukuna", 1200, "Malevolent Shrine", "Special Grade")

    human = Human("Ordinary Human", 10, "None", 30)

    print("=== Characters ===")
    print(gojo)
    print(yuta)
    print(sukuna)
    print(human)
    print()

    print("=== Attacks ===")
    print(gojo.attack())
    print(yuta.attack())
    print(sukuna.attack())
    print()

    print("=== Fear Spread ===")
    print(sukuna.spread_fear(human))
    print("Human negativity:", human.negativity)
    print()

    print("=== Curse Creation ===")
    new_curse = human.create_curse()

    if new_curse:
        print("A new curse has been created!")
        print(new_curse)
    else:
        print("Negativity is not high enough to create a curse.")


if __name__ == "__main__":
    run_tests()