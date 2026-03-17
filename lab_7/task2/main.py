from models import Character, Sorcerer, Curse


def main():

    gojo = Sorcerer("Gojo Satoru", 1000, "Unlimited Void", "Special Grade")
    yuji = Sorcerer("Yuji Itadori", 500, "None", "Grade 1")

    sukuna = Curse("Ryomen Sukuna", 1200, "Malevolent Shrine", "Special Grade")

    characters = [gojo, yuji, sukuna]

    for c in characters:
        print(c)
        print(c.introduce())
        print(c.attack())
        print()

    print(gojo.exorcise_curse())
    print(sukuna.spread_fear())


if __name__ == "__main__":
    main()