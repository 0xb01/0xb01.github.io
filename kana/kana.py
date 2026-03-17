#!/usr/bin/env python3
"""
Kana Practice - Hiragana and Katakana pronunciation practice tool
with selectable character rows and reverse mode
"""

import random
import os

# Kana data organized by row
HIRAGANA_BY_ROW = {
    'a': {'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o'},
    'k': {'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko'},
    's': {'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so'},
    't': {'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to'},
    'n': {'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no'},
    'h': {'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho'},
    'm': {'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo'},
    'y': {'や': 'ya', 'ゆ': 'yu', 'よ': 'yo'},
    'r': {'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro'},
    'w': {'わ': 'wa', 'を': 'wo', 'ん': 'n'},
    'g': {'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go'},
    'z': {'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo'},
    'd': {'だ': 'da', 'ぢ': 'dji', 'づ': 'dzu', 'で': 'de', 'ど': 'do'},
    'b': {'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo'},
    'p': {'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po'},
    'v': { 'ゔ': 'vu'}
}

KATAKANA_BY_ROW = {
    'a': {'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o'},
    'k': {'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko'},
    's': {'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so'},
    't': {'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to'},
    'n': {'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no'},
    'h': {'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho'},
    'm': {'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo'},
    'y': {'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo'},
    'r': {'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro'},
    'w': {'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n'},
    'g': {'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go'},
    'z': {'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo'},
    'd': {'ダ': 'da', 'ヂ': 'dji', 'ヅ': 'dzu', 'デ': 'de', 'ド': 'do'},
    'b': {'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo'},
    'p': {'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po'}
}

ROW_INFO = [
    ('a', 'A', 'あ'), ('k', 'K', 'か'), ('s', 'S', 'さ'), ('t', 'T', 'た'),
    ('n', 'N', 'な'), ('h', 'H', 'は'), ('m', 'M', 'ま'), ('y', 'Y', 'や'),
    ('r', 'R', 'ら'), ('w', 'W', 'わ'), ('g', 'G', 'が'), ('z', 'Z', 'ざ'),
    ('d', 'D', 'だ'), ('b', 'B', 'ば'), ('p', 'P', 'ぱ'), ('v', 'V', 'ゔ')
]

BASIC_ROWS = ['a', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w']
VOICED_ROWS = ['g', 'z', 'd', 'b', 'p', 'v']


def clear_screen():
    """Clear the terminal screen."""
    os.system('cls' if os.name == 'nt' else 'clear')


def print_header():
    """Print the application header."""
    print("\n" + "=" * 50)
    print("       🎌  Kana Practice  🎌")
    print("=" * 50)
    print()


def print_row_table():
    """Print the row selection table."""
    print("  Row  | Basic | Voiced")
    print("  -----|-------|-------")
    for row_code, row_label, sample in ROW_INFO:
        row_type = "Voiced" if row_code in VOICED_ROWS else "Basic"
        print(f"   {row_label}   |  {sample}    |  {row_type}")
    print()


def get_user_selection():
    """Get user's selection for which kana sets and rows to practice."""
    print("Select practice mode (you can select multiple, e.g., '1 2 3'):")
    print("  [1] Kana → Romaji (type pronunciation)")
    print("  [2] Romaji → Kana (type character)")
    print("  [3] Romaji → Kana (multiple choice)")
    print()
    
    while True:
        mode_input = input("Enter your choice(s): ").strip()
        mode_choices = mode_input.replace(',', ' ').split()
        
        if not mode_choices:
            print("Please select at least one mode.")
            continue
        
        practice_modes = []
        valid = True
        for choice in mode_choices:
            if choice == '1':
                practice_modes.append('normal')
            elif choice == '2':
                practice_modes.append('reverse_type')
            elif choice == '3':
                practice_modes.append('reverse_multi')
            else:
                print(f"Invalid choice: '{choice}'. Please enter 1, 2, or 3.")
                valid = False
                break
        
        if valid and practice_modes:
            break
    
    # If multiple modes selected, use 'all', otherwise use the single mode
    practice_mode = 'all' if len(practice_modes) > 1 else practice_modes[0]
    
    print()
    print("Select character type:")
    print("  [1] Hiragana (あいうえお)")
    print("  [2] Katakana (アイウエオ)")
    print("  [3] Both")
    print()
    
    while True:
        type_choice = input("Enter your choice (1/2/3): ").strip()
        if type_choice == '1':
            char_type = 'hiragana'
            break
        elif type_choice == '2':
            char_type = 'katakana'
            break
        elif type_choice == '3':
            char_type = 'both'
            break
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")
    
    print()
    print("-" * 50)
    print("Select character rows to practice:")
    print("-" * 50)
    print_row_table()
    print("Examples:")
    print("  - Type 'A K S' for A, K, S rows only")
    print("  - Type 'all' for all rows")
    print("  - Type 'basic' for basic rows only (A, K, S, T, N, H, M, Y, R, W)")
    print("  - Type 'voiced' for voiced rows only (G, Z, D, B, P)")
    print()
    
    while True:
        row_input = input("Enter rows: ").strip().lower()
        
        if row_input == 'all':
            selected_rows = [r[0] for r in ROW_INFO]
            break
        elif row_input == 'basic':
            selected_rows = BASIC_ROWS
            break
        elif row_input == 'voiced':
            selected_rows = VOICED_ROWS
            break
        else:
            row_letters = row_input.replace(',', ' ').split()
            selected_rows = []
            valid = True
            for letter in row_letters:
                letter = letter.lower()
                if letter in [r[0] for r in ROW_INFO]:
                    selected_rows.append(letter)
                else:
                    print(f"Invalid row: '{letter}'. Please try again.")
                    valid = False
                    break
            if valid and selected_rows:
                break
            elif valid:
                print("No valid rows selected. Please try again.")
    
    print(f"\nSelected rows: {', '.join(r.upper() for r in selected_rows)}")
    return practice_mode, char_type, selected_rows


def build_practice_queue(practice_mode, char_type, selected_rows):
    """Build the queue of characters to practice."""
    queue = []
    
    # Build base queue
    if char_type in ('hiragana', 'both'):
        for row in selected_rows:
            row_data = HIRAGANA_BY_ROW.get(row, {})
            for kana, romaji in row_data.items():
                queue.append({'character': kana, 'answer': romaji, 'type': 'Hiragana'})
    
    if char_type in ('katakana', 'both'):
        for row in selected_rows:
            row_data = KATAKANA_BY_ROW.get(row, {})
            for kana, romaji in row_data.items():
                queue.append({'character': kana, 'answer': romaji, 'type': 'Katakana'})
    
    # Create mode-specific queues
    final_queue = []
    
    if practice_mode == 'normal':
        for item in queue:
            final_queue.append({**item, 'mode': 'normal'})
    elif practice_mode == 'reverse_type':
        for item in queue:
            final_queue.append({**item, 'mode': 'reverse_type'})
    elif practice_mode == 'reverse_multi':
        for item in queue:
            final_queue.append({**item, 'mode': 'reverse_multi'})
    elif practice_mode == 'all':
        for item in queue:
            final_queue.append({**item, 'mode': 'normal'})
            final_queue.append({**item, 'mode': 'reverse_type'})
            final_queue.append({**item, 'mode': 'reverse_multi'})
    
    random.shuffle(final_queue)
    return final_queue


def generate_multiple_choice(correct_item, queue):
    """Generate multiple choice options for reverse mode."""
    # Filter items of same type
    same_type = [item for item in queue if item['type'] == correct_item['type']]
    
    # Get wrong choices
    wrong_items = [item for item in same_type if item['character'] != correct_item['character']]
    random.shuffle(wrong_items)
    
    # Select 3 wrong answers
    choices = [correct_item] + wrong_items[:3]
    random.shuffle(choices)
    
    return choices


def run_practice(queue):
    """Run the practice session."""
    correct = 0
    wrong = 0
    wrong_answers = []
    total = len(queue)
    
    for i, item in enumerate(queue, 1):
        clear_screen()
        print()
        
        mode_display = {
            'normal': 'Kana→Romaji',
            'reverse_type': 'Romaji→Kana (type)',
            'reverse_multi': 'Romaji→Kana (choice)'
        }
        print(f"  [{i}/{total}]  Type: {item['type']}  |  Mode: {mode_display.get(item['mode'], 'Unknown')}")
        print()
        
        if item['mode'] == 'reverse_multi':
            # Reverse multiple choice: show romaji, select kana
            print()
            print(f"          {item['answer']}")
            print()
            print()
            print("  Select the correct character:")
            print()
            
            choices = generate_multiple_choice(item, queue)
            for idx, choice in enumerate(choices, 1):
                print(f"    [{idx}]  {choice['character']}")
            print()
            
            while True:
                answer = input("  Your choice (1-4): ").strip()
                if answer in ['1', '2', '3', '4']:
                    selected_idx = int(answer) - 1
                    selected_char = choices[selected_idx]['character']
                    if selected_char == item['character']:
                        print("  ✓ Correct!")
                        correct += 1
                    else:
                        print(f"  ✗ Wrong! The answer was: {item['character']}")
                        wrong += 1
                        wrong_answers.append({**item, 'userTyped': selected_char})
                    break
                elif answer.lower() == 'quit':
                    print(f"\nEnding practice early. You completed {i-1} of {total} characters.")
                    return correct, wrong, wrong_answers
                else:
                    print("  Please enter 1-4")
        
        elif item['mode'] == 'reverse_type':
            # Reverse type: show romaji, type the kana character
            print()
            print()
            print(f"          {item['answer']}")
            print()
            print()
            
            answer = input("Type the kana character: ").strip()
            
            if answer == 'quit':
                print(f"\nEnding practice early. You completed {i-1} of {total} characters.")
                break
            
            if answer == item['character']:
                print("✓ Correct!")
                correct += 1
            else:
                print(f"✗ Wrong! The answer was: {item['character']}")
                wrong += 1
                wrong_answers.append({**item, 'userTyped': answer})
        
        else:
            # Normal mode: show kana, type romaji
            print()
            print()
            print(f"          {item['character']}")
            print()
            print()
            
            answer = input("Input: ").strip().lower()
            
            if answer == 'quit':
                print(f"\nEnding practice early. You completed {i-1} of {total} characters.")
                break
            
            if answer == item['answer'].lower():
                print("✓ Correct!")
                correct += 1
            else:
                print(f"✗ Wrong! The answer was: {item['answer']}")
                wrong += 1
                wrong_answers.append({**item, 'userTyped': answer})
    
    return correct, wrong, wrong_answers


def show_results(correct, wrong, total_attempted, wrong_answers):
    """Show the final results."""
    clear_screen()
    print("\n" + "=" * 50)
    print("           Practice Complete!")
    print("=" * 50)
    
    if total_attempted > 0:
        percentage = round((correct / total_attempted) * 100)
        print(f"\n  Final Score: {percentage}%")
        print(f"\n  Correct:  {correct}")
        print(f"  Wrong:    {wrong}")
        print(f"  Total:    {total_attempted}")
        
        print("\n  ", end="")
        if percentage >= 90:
            print("🎉 Excellent! You're a kana master!")
        elif percentage >= 70:
            print("👍 Great job! Keep practicing!")
        elif percentage >= 50:
            print("📚 Good effort! Practice makes perfect!")
        else:
            print("💪 Don't give up! Try again!")
        
        # Display wrong answers
        if wrong_answers:
            print("\n" + "-" * 50)
            print("  Characters to Review:")
            print("-" * 50)
            for item in wrong_answers:
                mode_str = {
                    'normal': 'K→R',
                    'reverse_type': 'R→K (type)',
                    'reverse_multi': 'R→K (choice)'
                }.get(item['mode'], '?')
                
                user_typed = item.get('userTyped', '?')
                print(f"    [{mode_str}]  {item['character']}  ({item['type']})")
                print(f"      Expected: {item['answer']}  |  You: {user_typed}")
            print("-" * 50)
    else:
        print("\n  No characters were practiced.")
    
    print("\n" + "=" * 50)


def main():
    """Main function to run the kana practice."""
    clear_screen()
    print_header()
    
    practice_mode, char_type, selected_rows = get_user_selection()
    queue = build_practice_queue(practice_mode, char_type, selected_rows)
    
    correct, wrong, wrong_answers = run_practice(queue)
    
    show_results(correct, wrong, correct + wrong, wrong_answers)
    
    # Ask if user wants to practice again
    print()
    while True:
        again = input("Practice again? (y/n): ").strip().lower()
        if again == 'y':
            clear_screen()
            main()
            break
        elif again == 'n':
            print("\nThanks for practicing! Sayonara! 👋\n")
            break
        else:
            print("Please enter 'y' or 'n'.")


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nPractice interrupted. Goodbye! 👋\n")
    except EOFError:
        print("\n\nGoodbye! 👋\n")
